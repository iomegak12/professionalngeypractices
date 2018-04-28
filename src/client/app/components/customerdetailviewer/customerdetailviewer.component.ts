import { Customer } from "../../models/crmsystem/customer";
import { Input, Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'customerdetailviewer.component.html',
    styleUrls: ['customerdetailviewer.component.css'],
    selector: 'customerdetailviewer-component'
})
class CustomerDetailViewerComponent {
    @Input()
    public customerDetail: Customer;

    @Input()
    public modelId: string = '';

    constructor() {
        console.log('Customer Detail Viewer Component Initialized!');
    }
}

export { CustomerDetailViewerComponent };