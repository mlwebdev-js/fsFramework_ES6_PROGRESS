// js/Controller.js
export default class Controller {
    constructor(utility) {
        this.utility = utility;
        
    }

    // load html templates
    loadAboutPage() {
        this.utility.loadHtmlTemplate('./templates/about.html', '#contentArea');
    }

    loadContactPage() {
        this.utility.loadHtmlTemplate('./templates/contact.html', '#contentArea');
    }
}
