import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'contactus.component.html',
    styleUrls: ['contactus.component.css'],
    selector: 'contactus-component'
})
class ContactUsComponent {
    constructor() {
        console.log('ContactUs component initialized!');
    }
}

export { ContactUsComponent };