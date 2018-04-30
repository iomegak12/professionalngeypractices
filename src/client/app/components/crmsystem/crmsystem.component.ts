import { ICustomerService, CUSTOMER_SERVICE_TOKEN } from "../../services/customers/icustomers.service";
import { Inject, OnInit, Component } from "@angular/core";
import { Customer } from "../../models/crmsystem/customer";
import { IPushNotificationsService, PUSH_NOTIFICATIONS_SERVICE_TOKEN } from "../../services/pushnotifications/ipushnotifications.service";

const INVALID_DEPENDENCY_SERVICES = 'Invalid Dependency Service(s) Specified!';

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
        private customerService: ICustomerService,
        @Inject(PUSH_NOTIFICATIONS_SERVICE_TOKEN)
        private pushNotificationsService: IPushNotificationsService) {
        let validation = this.customerService && this.pushNotificationsService;

        if (!validation)
            throw new Error(INVALID_DEPENDENCY_SERVICES);
    }

    ngOnInit() {
        this.isLoading = true;

        this.pushNotificationsService.registerCallback(
            (notificationMessage: any) => {
                if (notificationMessage) {
                    let newCustomer = new Customer(
                        notificationMessage.id, notificationMessage.name,
                        notificationMessage.address, notificationMessage.credit,
                        notificationMessage.status, notificationMessage.email,
                        notificationMessage.phone, notificationMessage.remarks);

                    this.customers = [... this.customers, newCustomer];
                }
            });

        this.customerService
            .getCustomers()
            .subscribe(
                results => this.customers = results,
                error => this.errorMessage = `Error Occurred, Details : ${JSON.stringify(error)}`,
                () => this.isLoading = false);
    }
}

export { CrmSystemComponent };
