import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { LoginComponent } from "../../components/login/login.component";
import { LogoutComponent } from "../../components/logout/logout.component";

const securityRouteEntries: Route[] =
    [
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'logout',
            component: LogoutComponent
        }
    ];

const securityRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(securityRouteEntries);

export { securityRouteDefinitions };
