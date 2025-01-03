class PhylogenyGame {
    constructor(rootElement) {
        this.root = rootElement;
        this.state = {
            currentPuzzle: null,
            shuffledTaxa: [],
            hasGuessed: false,
            isCorrect: false,
            selectedTaxon: null,
            correctTaxon: null
        };

        this.loadData().then(() => {
            this.setupNewPuzzle();
            this.render();
        });
    }

    async loadData() {
        const response = await fetch('data.json');
        const rawData = await response.json();
        
        // Initialize empty object for grouped data
        this.groupedData = {};
        
        // Go through each triplet in the raw data
        for (let triplet of rawData) {
            // Create key using just the names, not the full data
            const key = JSON.stringify([triplet[0][0], triplet[1][0]]);
            
            // If we haven't seen this pair before, initialize it
            if (!this.groupedData[key]) {
                this.groupedData[key] = {
                    pair: [triplet[0], triplet[1]],
                    thirds: []
                };
            }
            
            // Add the third element if it's not already there
            if (!this.groupedData[key].thirds.find(t => t[0] === triplet[2][0])) {
                this.groupedData[key].thirds.push(triplet[2]);
            }
        }
        
        // Keep the old this.data for compatibility
        this.data = rawData;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    setupNewPuzzle() {
        const pairs = Object.values(this.groupedData);
        const randomPair = pairs[Math.floor(Math.random() * pairs.length)];
        const randomThird = randomPair.thirds[Math.floor(Math.random() * randomPair.thirds.length)];
        const puzzle = [...randomPair.pair, randomThird];
        const taxa = [...puzzle];
        for (let i = taxa.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [taxa[i], taxa[j]] = [taxa[j], taxa[i]];
        }
        
        this.setState({
            currentPuzzle: puzzle,
            shuffledTaxa: taxa,
            hasGuessed: false,
            isCorrect: false,
            selectedTaxon: null,
            correctTaxon: puzzle[2]
        });
    }

    handleGuess(taxon) {
        if (this.state.hasGuessed) return;
        const isCorrect = JSON.stringify(taxon) === JSON.stringify(this.state.currentPuzzle[2]);
        this.setState({
            hasGuessed: true,
            isCorrect,
            selectedTaxon: taxon
        });
    }

    createElement(type, props = {}, ...children) {
        const element = document.createElement(type);
        Object.entries(props).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else if (key.startsWith('on')) {
                const eventName = key.toLowerCase().slice(2);
                element.addEventListener(eventName, value);
            } else {
                element.setAttribute(key, value);
            }
        });
        children.flat().forEach(child => {
            if (child instanceof Element) {
                element.appendChild(child);
            } else if (child !== null && child !== undefined) {
                element.appendChild(document.createTextNode(String(child)));
            }
        });
        return element;
    }

    render() {
        const { currentPuzzle, shuffledTaxa, hasGuessed, isCorrect, selectedTaxon } = this.state;
        
        this.root.innerHTML = '';
        this.root.appendChild(
            this.createElement('div', { className: 'max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg' },
                this.createElement('h2', { className: 'text-4xl font-bold mb-4 text-center' },
                    'Choose the phylogenetic outlier:'
                ),
                this.createElement('div', { className: 'grid grid-cols-3 gap-4 mb-6' },
                    ...shuffledTaxa.map(taxon => {
                        const div = this.createElement('div', {
                            className: 'relative'
                        });

                        const card = this.createElement('button', {
                            className: `p-4 w-full rounded transition-colors ${
                                hasGuessed ? 
                                    JSON.stringify(taxon) === JSON.stringify(selectedTaxon) ?
                                        isCorrect ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'
                                    : JSON.stringify(taxon) === JSON.stringify(currentPuzzle[2]) ?
                                        'bg-green-100 border-2 border-green-500'
                                    : 'bg-gray-100'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`,
                            onclick: (e) => {
                                e.preventDefault();
                                if (!hasGuessed) {
                                    this.handleGuess(taxon);
                                }
                                return false;
                            },
                            ontouchend: (e) => {
                                e.preventDefault();
                                if (!hasGuessed) {
                                    this.handleGuess(taxon);
                                }
                                return false;
                            }
                        });

                        const img = this.createElement('img', {
                            src: taxon[2],
                            className: 'w-full h-48 object-cover mb-2 rounded'
                        });

                        const link = this.createElement('a', {
                            href: taxon[1],
                            className: 'text-blue-600 hover:underline',
                            target: '_blank',
                            onclick: (e) => e.stopPropagation(),
                            ontouchend: (e) => e.stopPropagation()
                        }, taxon[0]);

                        card.appendChild(img);
                        card.appendChild(link);
                        div.appendChild(card);
                        return div;
                    })
                ),
                hasGuessed ? 
                    this.createElement('div', { className: 'mt-6 flex justify-center' },
                        this.createElement('button', {
                            className: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
                            onclick: (e) => {
                                e.preventDefault();
                                this.setupNewPuzzle();
                                return false;
                            }
                        }, 'Next Puzzle')
                    )
                    : null
            )
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('phylogeny-game-root');
    new PhylogenyGame(rootElement);
});