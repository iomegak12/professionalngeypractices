import { RouterModule, Route } from "@angular/router";
import { CrmSystemComponent } from "../../components/crmsystem/crmsystem.component";
import { ModuleWithProviders } from "@angular/core";
import { NewCustomerComponent } from "../../components/newcustomer/newcustomer.component";

const crmSystemRouteEntries: Route[] = [
    {
        path: 'crm-system',
        component: CrmSystemComponent
    },
    {
        path: 'new-customer',
        component: NewCustomerComponent
    }
];

const crmSystemRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(crmSystemRouteEntries, {
        useHash: false
    });

export { crmSystemRouteDefinitions };
