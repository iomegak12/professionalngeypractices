import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css'],
    selector: 'navigation-component'
})
class NavigationComponent {
    constructor() {
        console.log('Navigation component initialized!');
    }
}

export { NavigationComponent };