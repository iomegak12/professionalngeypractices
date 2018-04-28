import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'contactinfo.component.html',
    styleUrls: ['contactinfo.component.css'],
    selector: 'contactinfo-component'
})
class ContactInfoComponent {
    constructor() {
        console.log('ContactInfo component initialized!');
    }
}

export { ContactInfoComponent };