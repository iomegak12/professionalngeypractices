import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'footernavigation.component.html',
    styleUrls: ['footernavigation.component.css'],
    selector: 'footernavigation-component'
})
class FooterNavigationComponent {
    constructor() {
        console.log('FooterNavigation component initialized!');
    }
}

export { FooterNavigationComponent };