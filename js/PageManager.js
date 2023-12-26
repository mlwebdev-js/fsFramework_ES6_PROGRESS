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



