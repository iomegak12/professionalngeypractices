import { Customer } from "../../models/crmsystem/customer";
import { ICustomerService, CUSTOMER_SERVICE_TOKEN } from "../../services/customers/icustomers.service";
import { Observable } from "rxjs/Observable";
import { IPushNotificationsService, PUSH_NOTIFICATIONS_SERVICE_TOKEN } from "../../services/pushnotifications/ipushnotifications.service";
import { TestBed, async } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { CustomerSearchPanelComponent } from "../customersearchpanel/customersearchpanel.component";
import { CustomerThumbnailViewer } from "../customerthumbnailviewer/customerthumbnailviewer.component";
import { WherePipe } from "../../pipes/where/where.pipe";
import { CustomerDetailViewerComponent } from "../customerdetailviewer/customerdetailviewer.component";
import { PhotoUrlPipe } from "../../pipes/photourl/photourl.pipe";
import { SymbolPipe } from "../../pipes/symbol/symbol.pipe";
import { FormsModule } from "@angular/forms";
import { CrmSystemComponent } from "./crmsystem.component";

let mockCustomerRecords = [
    new Customer(11, 'Mock Customer 11', 'Bangalore', 23000, true, 'info@email.com', '080-49834933', 'Simple'),
    new Customer(12, 'Mock Customer 12', 'Bangalore', 23000, true, 'info@email.com', '080-49834933', 'Simple'),
    new Customer(13, 'Mock Customer 13', 'Bangalore', 23000, true, 'info@email.com', '080-49834933', 'Simple'),
    new Customer(14, 'Mock Customer 14', 'Bangalore', 23000, true, 'info@email.com', '080-49834933', 'Simple'),
    new Customer(15, 'Mock Customer 15', 'Bangalore', 23000, true, 'info@email.com', '080-49834933', 'Simple')
];

class MockCustomerService implements ICustomerService {
    public customerRecords: Customer[] = [];

    getCustomers(): Observable<Customer[]> {
        let observable = Observable.create(
            (observer: any) => {
                observer.next(this.customerRecords);
                observer.complete();
            });

        return observable;
    }

    saveCustomerRecord(customerRecord: Customer): Observable<any> {
        throw new Error('Not Implemented ...');
    }
}

class MockPushNotificationsService implements IPushNotificationsService {
    registerCallback(callback: (notificationMessage: any) => void): boolean {
        return true;
    }
}

function main() {
    describe('Crm System Component Test Suite', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CommonModule, FormsModule],
                declarations: [
                    CustomerSearchPanelComponent,
                    CustomerThumbnailViewer,
                    CustomerDetailViewerComponent,
                    WherePipe, PhotoUrlPipe, SymbolPipe,
                    CrmSystemComponent
                ],
                providers:
                    [
                        {
                            provide: CUSTOMER_SERVICE_TOKEN,
                            useClass: MockCustomerService
                        },
                        {
                            provide: PUSH_NOTIFICATIONS_SERVICE_TOKEN,
                            useClass: MockPushNotificationsService
                        }
                    ]
            });
        });

        it('Should CRM System Component provide Customer Records', async(() => {
            TestBed.compileComponents()
                .then(
                    results => {
                        let fixture = TestBed.createComponent(CrmSystemComponent);
                        let componentInstance = fixture.debugElement.componentInstance;
                        let mockCustomerService =
                            fixture.debugElement.injector.get<MockCustomerService>(CUSTOMER_SERVICE_TOKEN);
                        let mockPushNotificationsService =
                            fixture.debugElement.injector.get<MockPushNotificationsService>(PUSH_NOTIFICATIONS_SERVICE_TOKEN);

                        spyOn(mockPushNotificationsService, 'registerCallback').and.callThrough();
                        spyOn(mockCustomerService, 'getCustomers').and.callThrough();

                        mockCustomerService.customerRecords = mockCustomerRecords;
                        fixture.detectChanges();

                        expect(componentInstance.customers).toBeDefined();
                        expect(componentInstance.customers.length).toBe(5);
                        expect(componentInstance.customers[0].id).toBe(11);
                        expect(componentInstance.customers[1].name).toBe('Mock Customer 12');

                        expect(mockCustomerService.getCustomers).toHaveBeenCalledTimes(1);
                        expect(mockPushNotificationsService.registerCallback).toHaveBeenCalledTimes(1);
                    });
        }));

        afterEach(() => {
            console.log('Test Cleanup Completed ...');
        });
    });
}

export { main };
