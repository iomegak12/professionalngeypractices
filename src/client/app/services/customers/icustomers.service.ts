import { Observable } from "rxjs/Observable";
import { Customer } from "../../models/crmsystem/customer";
import { InjectionToken } from "@angular/core";

const CUSOTMER_SERVICE_URL_TOKEN: InjectionToken<string> =
    new InjectionToken<string>('customerServiceUrl');

const CUSTOMER_SERVICE_TOKEN: InjectionToken<ICustomerService> =
    new InjectionToken<ICustomerService>('customerService');

interface ICustomerService {
    getCustomers(): Observable<Customer[]>;
    saveCustomerRecord(customerRecord: Customer): Observable<any>;
}

export { ICustomerService, CUSTOMER_SERVICE_TOKEN, CUSOTMER_SERVICE_URL_TOKEN };
