import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'footercopyright.component.html',
    styleUrls: ['footercopyright.component.css'],
    selector: 'footercopyright-component'
})
class FooterCopyrightComponent {
    constructor() {
        console.log('FooterCopyright component initialized!');
    }
}

export { FooterCopyrightComponent };