import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    selector: 'header-component'
})
class HeaderComponent {
    constructor() {
        console.log('Header component initialized!');
    }
}

export { HeaderComponent };