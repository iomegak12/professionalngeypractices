import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { componentFactoryName } from '@angular/compiler';
import { ContactUsComponent } from '../../components/contactus/contactus.component';
import { AboutUsComponent } from '../../components/aboutus/aboutus.component';
import { ModuleWithProviders } from '@angular/core';

const sharedRouteEntries: Route[] =
    [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'contact-us',
            component: ContactUsComponent
        },
        {
            path: 'about-us',
            component: AboutUsComponent
        },
        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
        }
    ];

let sharedRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(sharedRouteEntries, {
        useHash: false
    });

export { sharedRouteDefinitions };


