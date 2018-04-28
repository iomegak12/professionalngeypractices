import { ICustomerService, CUSTOMER_SERVICE_TOKEN } from "../../services/customers/icustomers.service";
import { Inject, OnInit, Component } from "@angular/core";
import { Customer } from "../../models/crmsystem/customer";

const INVALID_CUSTOMER_SERVICE = 'Invalid Customer Service Specified!';

@Component({
    moduleId: module.id,
    templateUrl: 'crmsystem.component.html',
    styleUrls: ['crmsystem.component.css'],
    selector: 'crmsystem-component'
})
class CrmSystemComponent implements OnInit {
    public customers: Customer[] = [];
    public isLoading: boolean = false;
    public errorMessage: string = '';

    constructor(
        @Inject(CUSTOMER_SERVICE_TOKEN)
        private customerService: ICustomerService) {
        let validation = this.customerService !== null;

        if (!validation)
            throw new Error(INVALID_CUSTOMER_SERVICE);
    }

    ngOnInit() {
        this.isLoading = true;

        this.customerService
            .getCustomers()
            .subscribe(
                results => this.customers = results,
                error => this.errorMessage = `Error Occurred, Details : ${JSON.stringify(error)}`,
                () => this.isLoading = false);
    }
}

export { CrmSystemComponent };
