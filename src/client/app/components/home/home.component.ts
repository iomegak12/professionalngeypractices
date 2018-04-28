import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    selector: 'home-component'
})
class HomeComponent {
    constructor() {
        console.log('Home component initialized!');
    }
}

export { HomeComponent };