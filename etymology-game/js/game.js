// Etymology data
const etymologyData = [
    // ['*peh₂w-', 'παύω', ['pause', 'repose', 'encyclopedia']],
    // ['*deyḱ-', 'tache', ['tack', 'tache', 'dictionary']],
    // ['*dʰeh₁-', 'factum', ['feat', 'fact', 'word']],
    // ['*h₁ey-', 'iter', ['errant', 'arrant', 'January']],
    ['*bʰeh₂-', 'focus', ['fuel', 'focus', 'fable']],
    // ['*bʰuH-', 'Bauer', ['bower', 'Bauer', 'be']],
    // ['*bʰer-', 'bearn', ['barn', 'bairn', 'birth']],
    ['*bʰeyd-', 'beita', ['abet', 'bait', 'bit']],
    ['*sed-', 'sedes', ['see (n.)', 'sedan', 'supersede']],
    ['*Hrewp-', 'route', ['rut', 'route', 'abrupt']],
    ['*Hrewp-', 'robe', ['rubble', 'robe', 'abrupt']],
    ['*kelh₁-', 'clarus', ['clear', 'Clermont', 'calendar']],
    ['*swé', 'sine', ['sinecure', 'sans', 'so']],
    // ['*só', 'sine', ['sinecure', 'sans', 'this']],
    ['*ten-', 'τόνος', ['tone', 'tune', 'abstain']],
    ['*ten-', 'tentus', ['tenure', 'tent', 'abstain']],
    ['*deh₃-', 'vendo', ['vent', 'vend', 'die']],
    ['*ḱerd-', 'cor', ['courage', 'quarry', 'accord']],
    ['*pleh₂-', 'planta', ['plant', 'clan', 'planet']],
    ['*(s)kewH-', 'scutum', ['escutcheon', 'esquire', 'sky']],
    // ['*gʰreh₁-', 'herba', ['arbor', 'herb', 'growth']],
    // ['*h₂enh₁-', 'anda', ['and', 'onde', 'animal']],
    ['*dem-', 'materia', ['matter', 'Madeira', 'dame']],
    ['*dem-', 'dominus', ['danger', 'don', 'dame']],
    ['*dem-', 'domus', ['dame', 'domus', 'timber']],
    // ['*demh₂-', 'dominus', ['danger', 'don', 'dame']],
    ['*med-', 'modus', ['mood', 'mode', 'medicine']],
    ['*h₂er-', 'arma', ['armistice', 'alarm', 'army']],
    ['*pewǵ-', 'pugil', ['pug', 'pugilist', 'point']],
    ['*h₃reǵ-', 'regula', ['rail', 'rule', 'dick']],
    ['*h₃reǵ-', 'rectus', ['rectangle', 'rectitude', 'dick']],
    ['*per-', 'pro', ['profile', 'purport', 'first']],
    // ['*per-', 'porta', ['port', 'porta', 'first']],
    // ['*per-', 'pars', ['parse', 'partial', 'first']],
    // ['*per-', 'pretium', ['price', 'appreciate', 'first']],
    ['*steh₂-', 'staðr', ['Leinster', 'Munster', 'stand']],
    ['*h₂weh₁-', 'vannus', ['van', 'fan', 'aria']],
    ['*h₂ews-', 'αὔρα', ['aura', 'soar', 'Australia']],
    // ['*weyḱ-', 'villa', ['village', 'villain', 'economics']],
    // ['*wedʰ-', 'vas', ['vase', 'vas', 'wage']],
    ['*teh₂g-', 'taka', ['take', 'tack', 'tax']],
    // ['*bʰruHg-', 'fructus', ['fruit', 'Fructidor', 'brook']],
    // ['*preh₂-', 'primus', ['prime', 'prim', 'first']],
    ['*ḱers-', 'cursus', ['course', 'hussar', 'current']],
    ['*pleḱ-', 'replico', ['replica', 'reply', 'accomplice']],
    ['*ǵenh₁-', 'genus', ['gender', 'genus', 'general']],
    // ['*ker-', 'here', ['Harold', 'Hereford', 'harbor']],
    ['*ḱewh₁-', 'cavea', ['cage', 'gaol', 'church']],
    // ['*ǵʰelh₃-', 'fel', ['fell', 'felon', 'gold']],
    ['*ǵʰewd-', 'gutta', ['gout', 'gutter', 'yet']],
    // ['*wer-', 'weard', ['Wharton', 'Wardlaw', 'warm']],
    // ['*peth₂-', 'penna', ['pen', 'pennant', 'symptom']],
    // ['*peth₂-', 'passus', ['pass', 'pace', 'symptom']],
    ['*skey-', 'scutum', ['escutcheon', 'esquire', 'skew']],
    // ['*solh₂-', 'sol', ['sol', 'sole', 'safe']],
    ['*solh₂-', 'solidus', ['solid', 'souse', 'sol']],
    ['solidus', 'sol', ['sol', 'sole', 'solid']],
    ['*ǵʰer-', 'cohors', ['curtain', 'cohort', 'girl']],
    ['*tend-', 'tentus', ['tenure', 'tent', 'tense']],
    // ['*speḱ-', 'spectrum', ['spectrum', 'specter', 'species']],
    ['*weyd-', 'visus', ['advice', 'visage', 'visit']],
    // ['*gel-', 'col', ['Cole', 'Cowley', 'cold']],
    // ['*pro-', 'pro', ['profile', 'purport', 'project']],
    ['*(s)ker-', 'cancer', ['cancer', 'canker', 'carnation']],
    // ['*(s)ker-', 'curvus', ['curve', 'curb', 'carnation']],
    ['*aþalaz', 'Adalheidis', ['Adelaide', 'Alice', 'Adel']],
    ['*lewk-', 'λύγξ', ['lynx', 'ounce', 'light']],
    ['*legʰ-', 'lectus', ['litter', 'lecture', 'law']],
    ['*h₂welh₁-', 'weald', ['Waldo', 'Waltham', 'wool']],
    ['*(s)teg-', 'toga', ['toga', 'tog', 'stay']],
    ['*kʷyeh₁-', 'quietus', ['quit', 'coy', 'while']],
    ['*gʷreh₂-', 'gravis', ['grave', 'grief', 'gravity']],
    // ['*bʰerǵʰ-', 'burg', ['Edinburgh', 'Bury', 'force']],
    // ['*bʰerǵʰ-', 'beorg', ['Broughton', 'Barham', 'force']],
    ['*kʷey-', 'poena', ['pain', 'penal', 'pine']],
    // ['*pel-', 'pellis', ['pelt', 'pillion', 'fell']],
    ['bulla', 'bulle', ['bull', 'bill', 'bowl']],
    ['*kh₂em-', 'καμάρα', ['camera', 'chamber', 'champion']],
    ['*streyg-', 'strictus', ['stress', 'strait', 'strike']],
    ['βάσις', 'bassus', ['basso', 'debase', 'base']],
    ['*dʰeyǵʰ-', 'fingo', ['faint', 'feign', 'dairy']],
    ['*kewk-', 'haugr', ['how', 'huge', 'high']],
    ['*(s)peh₂-', 'spatium', ['spat', 'space', 'spoon']],
    // ['*dew-', 'bene', ['ben', 'bene', 'bounty']],
    // ['*ḱerh₂-', 'heorot', ['Hartley', 'Horton', 'rhinoceros']],
    // ['*h₃ep-', 'opus', ['opus', 'oeuvre', 'manure']],
    // ['*ǵerh₂-', 'corn', ['Corney', 'Cornhill', 'kernel']],
    ['*bʰelǵ-', 'φάλαγξ', ['plank', 'phalanx', 'fulcrum']],
    // ['*puH-', 'puer', ['puer', 'pooh', 'file']],
    // ['δίσκος', 'discus', ['dish', 'disc', 'disk']],
    ['*meh₂-', 'manus', ['manure', 'manage', 'immature']],
    // ['*bew-', 'bulla', ['bull', 'bowl', 'pick']],
    ['*sperH-', 'pars', ['parse', 'partial', 'spear']],
    ['dēnārius', 'denier', ['den', 'denier', 'dinar']],
    ['*yek-', 'iocus', ['jewel', 'joke', 'Yule']],
    // ['*bʰleyǵ-', 'blanc', ['blanch', 'blank', 'blanc']],
    // ['*blankaz', 'blanc', ['blanch', 'blank', 'blanquette']],
    // ['*laubijā', 'loge', ['lodge', 'loggia', 'loge']],
    // ['vīcus', 'βῖκος', ['beaker', 'pitcher', 'wick']]
];
  
// Create element helper function
const createElement = (type, props = {}, ...children) => {
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
        element.appendChild(document.createTextNode(String(child)));  // Added String() conversion
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

    createSvgElement(type, attributes = {}) {
        const element = document.createElementNS('http://www.w3.org/2000/svg', type);
        Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
            element.setAttribute('class', value);
        } else {
            element.setAttribute(key, value);
        }
        });
        return element;
    }

    renderTree() {
        const { currentPuzzle } = this.state;
        const svg = this.createSvgElement('svg', {
        viewBox: '0 0 400 240',
        className: 'w-full'
        });

        // Top level ancestor
        const topG = this.createSvgElement('g');
        const topRect = this.createSvgElement('rect', {
        x: '160',
        y: '20',
        width: '80',
        height: '30',
        rx: '5',
        className: 'fill-blue-100 stroke-blue-500'
        });
        const topText = this.createSvgElement('text', {
        x: '200',
        y: '40',
        'text-anchor': 'middle',
        className: 'text-base'
        });
        topText.textContent = currentPuzzle[0];
        topG.appendChild(topRect);
        topG.appendChild(topText);
        svg.appendChild(topG);

        // Middle level
        const midG = this.createSvgElement('g');
        const midRect = this.createSvgElement('rect', {
        x: '80',
        y: '100',
        width: '80',
        height: '30',
        rx: '5',
        className: 'fill-green-100 stroke-green-500'
        });
        const midText = this.createSvgElement('text', {
        x: '120',
        y: '120',
        'text-anchor': 'middle',
        className: 'text-base'
        });
        midText.textContent = currentPuzzle[1];
        midG.appendChild(midRect);
        midG.appendChild(midText);
        svg.appendChild(midG);

        // Connection lines
        const paths = [
        ['M200 50 L120 100', 'stroke-blue-500'],
        ['M200 50 L320 180', 'stroke-blue-500'],
        ['M120 130 L80 180', 'stroke-green-500'],
        ['M120 130 L200 180', 'stroke-green-500']
        ];

        paths.forEach(([d, className]) => {
        const path = this.createSvgElement('path', {
            d,
            className: `${className} fill-none`
        });
        svg.appendChild(path);
        });

        // Bottom level words
        currentPuzzle[2].forEach((word, index) => {
            const g = this.createSvgElement('g');
            const rect = this.createSvgElement('rect', {
                x: String(40 + index * 120),
                y: '180',
                width: '80',
                height: '30',
                rx: '5',
                className: word === currentPuzzle[2][2] ?
                'fill-blue-100 stroke-blue-500' :
                'fill-purple-100 stroke-purple-500'
            });
            const a = this.createSvgElement('a', {
                href: `https://en.wiktionary.org/wiki/${encodeURIComponent(word)}`,
                target: '_blank'
            });
            const text = this.createSvgElement('text', {
                x: String(80 + index * 120),
                y: '200',
                'text-anchor': 'middle',
                fill: '#2563eb',  // blue-600 color
                className: 'text-base cursor-pointer hover:underline'
            });
            text.textContent = word;
            a.appendChild(text);
            g.appendChild(rect);
            g.appendChild(a);
            svg.appendChild(g);
        });

        return svg;
    }

    render() {
        const { currentPuzzle, shuffledWords, hasGuessed, isCorrect, selectedWord } = this.state;
        
        this.root.innerHTML = '';
        this.root.appendChild(
        createElement('div', { className: 'max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg' },
            createElement('h2', { className: 'text-4xl font-bold mb-4 text-center' },
            'Choose the etymological outlier:'
            ),
            createElement('div', { className: 'grid grid-cols-3 gap-4 mb-6' },
            ...shuffledWords.map(word => 
                createElement('button', {
                className: `p-4 text-2xl rounded ${
                    hasGuessed && word === selectedWord
                    ? isCorrect
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`,
                onclick: (e) => {
                    e.preventDefault();
                    if (!hasGuessed) {
                        this.handleGuess(word);
                    }
                    return false;
                }
                }, word)
            )
            ),
hasGuessed ? 
          createElement('div', { className: 'mt-6' },
            createElement('div', { className: 'mb-4 text-center' },
              createElement('h3', { className: 'text-3xl font-semibold mb-2' },
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
                onclick: (e) => {
                    e.preventDefault();
                    this.setupNewPuzzle();
                    return false;
                }
                }, 'Next Puzzle')
            )
          )
          : null
        )
        );
    }
    }

    // Initialize the game when the DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('etymology-game-root');
    new EtymologyGame(rootElement);
});