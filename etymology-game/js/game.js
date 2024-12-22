// Etymology data
const etymologyData = [
    ['*peh₂w-', 'παύω', ['pause', 'repose', 'encyclopedia']],
    // ... (rest of the data array as before)
    ['vīcus', 'βῖκος', ['beaker', 'pitcher', 'wick']]
  ];
  
  // Create element helper function
  const createElement = (type, props = {}, ...children) => {
    const element = document.createElement(type);
    Object.entries(props).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key.startsWith('on')) {
        element.addEventListener(key.toLowerCase().slice(2), value);
      } else {
        element.setAttribute(key, value);
      }
    });
    children.flat().forEach(child => {
      if (child instanceof Element) {
        element.appendChild(child);
      } else if (child !== null && child !== undefined) {
        element.appendChild(document.createTextNode(child));
      }
    });
    return element;
  };
  
  class EtymologyGame {
    constructor(rootElement) {
      this.root = rootElement;
      this.state = {
        currentPuzzle: null,
        shuffledWords: [],
        hasGuessed: false,
        isCorrect: false,
        selectedWord: null
      };
  
      this.setupNewPuzzle();
      this.render();
    }
  
    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.render();
    }
  
    setupNewPuzzle() {
      const randomIndex = Math.floor(Math.random() * etymologyData.length);
      const puzzle = etymologyData[randomIndex];
      const words = [...puzzle[2]];
      for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
      }
      
      this.setState({
        currentPuzzle: puzzle,
        shuffledWords: words,
        hasGuessed: false,
        isCorrect: false,
        selectedWord: null
      });
    }
  
    handleGuess(word) {
      if (this.state.hasGuessed) return;
      const isCorrect = word === this.state.currentPuzzle[2][2];
      this.setState({
        hasGuessed: true,
        isCorrect,
        selectedWord: word
      });
    }
  
    renderTree() {
      const { currentPuzzle } = this.state;
      return createElement('svg', {
        viewBox: '0 0 400 240',
        className: 'w-full'
      },
        // Top level ancestor
        createElement('g', {},
          createElement('rect', {
            x: 160,
            y: 20,
            width: 80,
            height: 30,
            rx: 5,
            className: 'fill-blue-100 stroke-blue-500'
          }),
          createElement('text', {
            x: 200,
            y: 40,
            textAnchor: 'middle',
            className: 'text-sm'
          }, currentPuzzle[0])
        ),
        // Middle level
        createElement('g', {},
          createElement('rect', {
            x: 80,
            y: 100,
            width: 80,
            height: 30,
            rx: 5,
            className: 'fill-green-100 stroke-green-500'
          }),
          createElement('text', {
            x: 120,
            y: 120,
            textAnchor: 'middle',
            className: 'text-sm'
          }, currentPuzzle[1])
        ),
        // Connection lines
        createElement('path', {
          d: 'M200 50 L120 100',
          className: 'stroke-blue-500 fill-none'
        }),
        createElement('path', {
          d: 'M200 50 L320 180',
          className: 'stroke-blue-500 fill-none'
        }),
        createElement('path', {
          d: 'M120 130 L80 180',
          className: 'stroke-green-500 fill-none'
        }),
        createElement('path', {
          d: 'M120 130 L200 180',
          className: 'stroke-green-500 fill-none'
        }),
        // Bottom level words
        ...currentPuzzle[2].map((word, index) => 
          createElement('g', {},
            createElement('rect', {
              x: 40 + index * 120,
              y: 180,
              width: 80,
              height: 30,
              rx: 5,
              className: word === currentPuzzle[2][2] ? 
                'fill-blue-100 stroke-blue-500' : 
                'fill-purple-100 stroke-purple-500'
            }),
            createElement('text', {
              x: 80 + index * 120,
              y: 200,
              textAnchor: 'middle',
              className: 'text-sm'
            }, word)
          )
        )
      );
    }
  
    render() {
      const { currentPuzzle, shuffledWords, hasGuessed, isCorrect, selectedWord } = this.state;
      
      this.root.innerHTML = '';
      this.root.appendChild(
        createElement('div', { className: 'max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg' },
          createElement('h2', { className: 'text-2xl font-bold mb-4 text-center' },
            'Which word has a different etymology?'
          ),
          createElement('div', { className: 'grid grid-cols-3 gap-4 mb-6' },
            ...shuffledWords.map(word => 
              createElement('button', {
                className: `p-4 text-lg rounded ${
                  hasGuessed && word === selectedWord
                    ? isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`,
                onclick: () => this.handleGuess(word),
                disabled: hasGuessed
              }, word)
            )
          ),
          hasGuessed && createElement('div', { className: 'mt-6' },
            createElement('div', { className: 'mb-4 text-center' },
              createElement('h3', { className: 'text-xl font-semibold mb-2' },
                isCorrect ? 'Correct!' : 'Not quite right!'
              ),
              createElement('p', { className: 'text-gray-600' },
                'Here\'s how these words are related:'
              )
            ),
            this.renderTree(),
            createElement('div', { className: 'mt-6 flex justify-center' },
              createElement('button', {
                className: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
                onclick: () => this.setupNewPuzzle()
              }, 'Next Puzzle')
            )
          )
        )
      );
    }
  }
  
  // Initialize the game when the DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('etymology-game-root');
    new EtymologyGame(rootElement);
  });