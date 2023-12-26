import Utility from './Utility.js';

class PageManager {
    constructor() {
        this.utility = new Utility();
        this.root = this.utility.fs('#root');
        this.init();
    }

    init() {
        this.createButtons();
        this.createAdditionalElements();
        this.setupEventListeners();
        this.setupEventListeners();
    }

    createButtons() {
        const buttons = this.utility.createElements([
            { tagName: 'button', content: 'Load About Page', attributes: { id: 'loadAbout' } },
            { tagName: 'button', content: 'Load Contact Page', attributes: { id: 'loadContact' } }
            // ... other buttons
        ]);
        buttons.forEach(button => this.root.appendChild(button));
    }

    createAdditionalElements() {
        const additionalElements = this.utility.createElements([
            { tagName: 'p', content: 'This is a paragraph', attributes: { id: 'id1', class: 'my-custom-class' } },
            { tagName: 'p', content: 'This is a paragraph 2', attributes: { id: 'id2', class: 'my-custom-class' } }
            // ... other elements
        ]);
        additionalElements.forEach(element => this.root.appendChild(element));
    }



    setupEventListeners() {
        this.utility.fs('#loadAbout').addEventListener('click', () => {
            this.utility.loadHtmlTemplate('about.html', '#contentArea');
        });
        this.utility.fs('#loadContact').addEventListener('click', () => {
            this.utility.loadHtmlTemplate('contact.html', '#contentArea');
        });
        // ... other event listeners
    }
}

// Instantiate and run the PageManager
new PageManager();
