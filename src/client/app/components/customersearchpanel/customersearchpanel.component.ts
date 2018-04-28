import { Input, Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'customersearchpanel-component',
    templateUrl: 'customersearchpanel.component.html',
    styleUrls: ['customersearchpanel.component.css']
})
class CustomerSearchPanelComponent {
    @Input()
    public searchString: string = '';

    constructor() {
        console.log('Customer Search Panel Initialized!');
    }
}

export { CustomerSearchPanelComponent };
