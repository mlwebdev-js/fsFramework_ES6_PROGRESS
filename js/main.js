// js/main.js
import Utility from './Utility.js';
import PageManager from './PageManager.js';
import Controller from './Controller.js';
// import Validation from './Validation.js';



document.addEventListener('DOMContentLoaded', () => {

    const utility = new Utility();
    const controller = new Controller(utility);
    const pageManager = new PageManager(controller);
    // const validation = new Validation(controller);


    // Example of dynamically creating layout
    const elementData = [
        {
            tagName: 'div',
            content: 'Dynamic Element 1',
            attributes: { 
                id: 'dynamic1', 
                class: 'dynamic-class'
            }
        },
        {
            tagName: 'div',
            content: 'Dynamic Element 2',
            attributes: { 
                id: 'dynamic2', 
                class: 'dynamic-class' }
        }, {
            tagName: 'input',
            content: '',
            attributes: { 
                type: 'text', name: 'username', placeholder: 'Username', autocomplete: 'off' 
            }
        },
        {
            tagName: 'input',
            content: '',
            attributes: { 
                type: 'password', name: 'password', placeholder: 'Password' 
        }
        },
        {
            tagName: 'button',
            content: 'Submit',
            attributes: { 
                id: 'submitForm'
            }
        }
        // ... more elements
    ];

    pageManager.createDynamicLayout(elementData);
});
