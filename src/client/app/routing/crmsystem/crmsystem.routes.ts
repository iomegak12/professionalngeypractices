import { RouterModule, Route } from "@angular/router";
import { CrmSystemComponent } from "../../components/crmsystem/crmsystem.component";
import { ModuleWithProviders } from "@angular/core";

const crmSystemRouteEntries: Route[] = [
    {
        path: 'crm-system',
        component: CrmSystemComponent
    }
];

const crmSystemRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(crmSystemRouteEntries, {
        useHash: false
    });

export { crmSystemRouteDefinitions };
