class Utility {
    // Constructor for the Utility class
    constructor() {}

    // Method to select elements
    fs(selector) {
        return document.querySelector(selector);
    }

    // Method to create multiple elements with attributes
    createElements(elements) {
        return elements.map(({ tagName, content, attributes }) => {
            const element = document.createElement(tagName);
            element.innerHTML = content;
            this.setAttributes(element, attributes);
            return element;
        });
    }

    // Method to set multiple attributes to an element
    setAttributes(element, attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    // AJAX Utility method for loading HTML templates with error handling
    loadHtmlTemplate(url, targetElementId, callback = () => {}) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    const targetElement = this.fs(targetElementId);
                    targetElement.innerHTML = this.responseText;
                    callback(targetElement);
                } else if (this.status === 404) {
                    console.log("The following html template is not connected: " + url);
                }
            }
        }.bind(this);
        xhr.send();
    }
}



// Export the Utility class
export default Utility;


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


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Page</title>
</head>
<body>
    <div id="root">
        <!-- Buttons and other elements will be dynamically added here -->
    </div>
    <div id="contentArea">
        <!-- Content loaded from external HTML files will appear here -->
    </div>

    <!-- Include the refactored JavaScript files -->
    <script type="module" src="Utility"></script>
    <script type="module" src="main.js"></script>
</body>
</html>


<!-- About page template-->
<div id="about">
    <p id="content">This is from the about.html page</p>
</div>

<!-- Contact page template-->
<div id="contact">
    <p id="content">This is from the contact.html page</p>
</div>
