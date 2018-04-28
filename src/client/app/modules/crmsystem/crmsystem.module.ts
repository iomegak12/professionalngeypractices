import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { crmSystemRouteDefinitions } from "../../routing/crmsystem/crmsystem.routes";
import { CrmSystemComponent } from "../../components/crmsystem/crmsystem.component";
import { CUSTOMER_SERVICE_TOKEN, CUSOTMER_SERVICE_URL_TOKEN } from "../../services/customers/icustomers.service";
import { CustomerService } from "../../services/customers/customers.service";
import { CustomerThumbnailViewer } from "../../components/customerthumbnailviewer/customerthumbnailviewer.component";
import { CommonModule } from "@angular/common";
import { PhotoUrlPipe } from "../../pipes/photourl/photourl.pipe";
import { CustomerDetailViewerComponent } from "../../components/customerdetailviewer/customerdetailviewer.component";
import { SymbolPipe } from "../../pipes/symbol/symbol.pipe";
import { CustomerSearchPanelComponent } from "../../components/customersearchpanel/customersearchpanel.component";
import { WherePipe } from "../../pipes/where/where.pipe";

@NgModule({
    imports: [FormsModule, CommonModule, crmSystemRouteDefinitions],
    declarations: [
        CrmSystemComponent, CustomerThumbnailViewer,
        CustomerDetailViewerComponent,
        CustomerSearchPanelComponent,
        PhotoUrlPipe, SymbolPipe, WherePipe
    ],
    providers: [
        {
            provide: CUSTOMER_SERVICE_TOKEN,
            useClass: CustomerService
        },
        {
            provide: CUSOTMER_SERVICE_URL_TOKEN,
            useFactory: () => {
                let serviceUrl = '';

                let buildType = String('<%= BUILD_TYPE %>');

                if (buildType === 'prod') {
                    serviceUrl = String('<%= PROD_CUSTOMER_SERVICE_URL %>');
                } else {
                    serviceUrl = String('<%= DEV_CUSTOMER_SERVICE_URL %>');
                }

                return serviceUrl;
            }
        }
    ]
})
class CrmSystemModule {
    constructor() {
        console.log('Crm System Module Initialized!');
    }
}

export { CrmSystemModule };