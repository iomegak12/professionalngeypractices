import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css'],
    selector: 'footer-component'
})
class FooterComponent {
    constructor() {
        console.log('Footer component initialized!');
    }
}

export { FooterComponent };