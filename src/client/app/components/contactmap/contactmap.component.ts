import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'contactmap.component.html',
    styleUrls: ['contactmap.component.css'],
    selector: 'contactmap-component'
})
class ContactMapComponent {
    constructor() {
        console.log('ContactMap component initialized!');
    }
}

export { ContactMapComponent };