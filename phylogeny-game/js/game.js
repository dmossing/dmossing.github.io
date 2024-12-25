class PhylogenyGame {
    constructor(rootElement) {
        this.root = rootElement;
        this.state = {
            currentPuzzle: null,
            shuffledTaxa: [],
            hasGuessed: false,
            isCorrect: false,
            selectedTaxon: null
        };

        this.loadData().then(() => {
            this.setupNewPuzzle();
            this.render();
        });
    }

    async loadData() {
        const response = await fetch('data.json');
        this.data = await response.json();
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    setupNewPuzzle() {
        const randomIndex = Math.floor(Math.random() * this.data.length);
        const puzzle = this.data[randomIndex];
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
            selectedTaxon: null
        });
    }

    handleGuess(taxon) {
        if (this.state.hasGuessed) return;
        const isCorrect = JSON.stringify(taxon) === JSON.stringify(this.state.currentPuzzle[2]);
        this.setState({
            hasGuessed: true,
            isCorrect,
            selectedTaxon: taxon,
            correctTaxon: this.state.currentPuzzle[2]  // Store correct answer
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
                            className: `relative ${
                                hasGuessed && JSON.stringify(taxon) === JSON.stringify(selectedTaxon)
                                ? isCorrect
                                    ? 'border-2 border-green-500'
                                    : 'border-2 border-red-500'
                                : ''
                            }`
                        });

                        const card = this.createElement('button', {
                            className: `p-4 w-full rounded ${
                                hasGuessed ? 
                                    JSON.stringify(taxon) === JSON.stringify(selectedTaxon) ?
                                        isCorrect ? 'bg-green-100' : 'bg-red-100'
                                    : JSON.stringify(taxon) === JSON.stringify(this.state.currentPuzzle[2]) ?
                                        'bg-green-100'  // Show correct answer
                                    : 'bg-gray-100'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`,
                            onclick: (e) => {
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
                            onclick: (e) => e.stopPropagation()
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