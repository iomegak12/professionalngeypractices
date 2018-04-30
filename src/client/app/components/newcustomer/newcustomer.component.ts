import { FormGroup } from "@angular/forms";
import { customerFormModel } from "./newcustomer.model";
import { ICustomerService, CUSTOMER_SERVICE_TOKEN } from "../../services/customers/icustomers.service";
import { Inject, Component } from "@angular/core";
import { Router } from "@angular/router";

const INVALID_DEPENDENCIES = 'Invalid Dependency Services Provided!';
const BUSINESS_VALIDATION_FAILED = 'Customer Form Business Validation Failed!';
const NAVIGATION_URI_AFTER_SAVE = 'crm-system';
const UNKNOWN_ERROR = 'Unknown Error Occurred!';

@Component({
    moduleId: module.id,
    templateUrl: 'newcustomer.component.html',
    styleUrls: ['newcustomer.component.css'],
    selector: 'newcustomer-component'
})
class NewCustomerComponent {
    public customerFormModel: FormGroup;
    public errorMessage: string = '';

    constructor(
        private routerService: Router,
        @Inject(CUSTOMER_SERVICE_TOKEN)
        private customerService: ICustomerService) {

        let validation = this.customerService && this.routerService;

        if (!validation)
            throw new Error(INVALID_DEPENDENCIES);

        this.customerFormModel = customerFormModel;
    }

    save() {
        let validation = this.customerFormModel && this.customerFormModel.valid;

        if (!validation) {
            this.errorMessage = BUSINESS_VALIDATION_FAILED;

            return;
        }

        this.customerService
            .saveCustomerRecord(this.customerFormModel.value)
            .subscribe(
                result => {
                    let saveStatus = result && result.status;

                    if (saveStatus) {
                        this.routerService.navigate([NAVIGATION_URI_AFTER_SAVE]);
                    } else {
                        this.errorMessage = UNKNOWN_ERROR;
                    }
                },
                error => this.errorMessage = `Error Occurred, Details : ${JSON.stringify(error)}`);
    }
}

export { NewCustomerComponent };
