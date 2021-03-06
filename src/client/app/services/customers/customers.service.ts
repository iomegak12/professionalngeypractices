import { ICustomerService, CUSOTMER_SERVICE_URL_TOKEN } from "./icustomers.service";
import { HttpClient } from '@angular/common/http';
import { Inject } from "@angular/core";
import { Customer } from "../../models/crmsystem/customer";
import { Observable } from "rxjs/Observable";

const INVALID_DEPENDENCIES = 'Invalid Dependency Service(s) Provided1';
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';

class CustomerService implements ICustomerService {
    private customerServiceUrl: string = '';

    constructor(private httpClient: HttpClient,
        @Inject(CUSOTMER_SERVICE_URL_TOKEN)
        private customerServiceBaseUrl: string) {
        let validation = this.httpClient &&
            this.customerServiceBaseUrl;

        if (!validation)
            throw new Error(INVALID_DEPENDENCIES);

        this.customerServiceUrl = `${this.customerServiceBaseUrl}/api/customers`;
    }

    getCustomers(): Observable<Customer[]> {
        let customers = this.httpClient.get<Customer[]>(this.customerServiceUrl);

        return customers;
    }

    saveCustomerRecord(customerRecord: Customer): Observable<any> {
        if (!customerRecord) {
            throw new Error(INVALID_ARGUMENTS);
        }

        let result = this.httpClient.post(this.customerServiceUrl, customerRecord);

        return result;
    }
}

export { CustomerService };