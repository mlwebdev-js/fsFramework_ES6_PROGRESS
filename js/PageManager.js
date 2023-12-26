// js/PageManager.js
import Utility from './Utility.js';

export default class PageManager {
    constructor(controller) {
        this.utility = new Utility();
        this.controller = controller;
        this.root = this.utility.fs('#root');
        this.init();
    }

    init() {
        this.createButtons();
        this.setupEventListeners();
    }

    createButtons() {
        // Define buttons
        const buttonData = [
            { 
                tagName: 'button', 
                content: 'Load About Page', 
                attributes: { 
                    id: 'loadAbout' 
                    } 
                },
            { 
                tagName: 'button', 
                content: 'Load Contact Page', 
                attributes: { 
                    id: 'loadContact'
                    } 
                }
        ];

        // Create buttons and append to root
        const buttons = this.utility.createElements(buttonData);
        buttons.forEach(button => this.root.appendChild(button));
    }

    setupEventListeners() {
        this.utility.fs('#loadAbout').addEventListener(
            'click', () => this.controller.loadAboutPage());
        this.utility.fs('#loadContact').addEventListener(
            'click', () => this.controller.loadContactPage());
    }

    createDynamicLayout(elementData) {
        const elements = this.utility.createElements(
            elementData);
        elements.forEach(element => this.root.appendChild(
            element)
        );
    }
}



/*
import Utility from './Utility.js';

export default class PageManager {
    constructor() {
        this.utility = new Utility();
        this.root = this.utility.fs('#root');
        this.init();
    }

    init() {
        this.createButtons();
        this.setupEventListeners();
    }

    createButtons() {
        const buttonData = [
            { tagName: 'button', content: 'Load About Page', attributes: { id: 'loadAbout' } },
            { tagName: 'button', content: 'Load Contact Page', attributes: { id: 'loadContact' } }
        ];
        const buttons = this.utility.createElements(buttonData);
        buttons.forEach(button => this.root.appendChild(button));
    }

    setupEventListeners() {
        this.utility.fs('#loadAbout').addEventListener('click', () => {
            this.utility.loadHtmlTemplate('./templates/about.html', '#contentArea');
        });
        this.utility.fs('#loadContact').addEventListener('click', () => {
            this.utility.loadHtmlTemplate('./templates/contact.html', '#contentArea');
        });
    }

    createDynamicLayout(elementData) {
        const elements = this.utility.createElements(elementData);
        elements.forEach(element => this.root.appendChild(element));
    }
}
*/

/*
import Utility from './Utility.js';

export class PageManager {
    constructor() {
        this.utility = new Utility();
        this.root = this.utility.querySelector('#root');
        this.init();
    }

    init() {
        if (this.root) {
            this.createButtons();
            this.setupEventListeners();
        }
    }

    createButtons() {
        const buttonData = [
            { tagName: 'button', content: 'Load About Page', attributes: { id: 'loadAbout' } },
            { tagName: 'button', content: 'Load Contact Page', attributes: { id: 'loadContact' } }
        ];

        const buttons = this.utility.createElements(buttonData);
        buttons.forEach(button => this.root.appendChild(button));
    }

    setupEventListeners() {
        const aboutButton = this.utility.querySelector('#loadAbout');
        const contactButton = this.utility.querySelector('#loadContact');

        if (aboutButton) {
            aboutButton.addEventListener('click', () => {
                this.utility.loadHtmlTemplate('templates/about.html', '#contentArea');
            });
        }

        if (contactButton) {
            contactButton.addEventListener('click', () => {
                this.utility.loadHtmlTemplate('templates/contact.html', '#contentArea');
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PageManager();
});
*/