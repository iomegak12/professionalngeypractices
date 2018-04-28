import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'faq.component.html',
    styleUrls: ['faq.component.css'],
    selector: 'faq-component'
})
class FaqComponent {
    constructor() {
        console.log('Faq component initialized!');
    }
}

export { FaqComponent };