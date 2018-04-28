import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'contactaddress.component.html',
    styleUrls: ['contactaddress.component.css'],
    selector: 'contactaddress-component'
})
class ContactAddressComponent {
    constructor() {
        console.log('ContactAddress component initialized!');
    }
}

export { ContactAddressComponent };