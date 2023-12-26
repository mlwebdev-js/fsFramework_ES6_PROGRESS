// js/Utility.js
export default class Utility {
    constructor() {}

    fs(selector) {
        return document.querySelector(selector);
    }

    createElements(elements) {
        return elements.map(({ tagName, content, attributes }) => {
            const element = document.createElement(tagName);
            element.textContent = content;
            Object.entries(attributes).forEach(([attr, value]) => {
                element.setAttribute(attr, value);
            });
            return element;
        });
    }

    setAttributes(element, attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    async loadHtmlTemplate(url, targetElementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const html = await response.text();
            const targetElement = this.fs(targetElementId);
            targetElement.innerHTML = html;
        } catch (e) {
            console.error("Error loading template:", e);
        }
    }
    // ... existing methods ...
  
}



