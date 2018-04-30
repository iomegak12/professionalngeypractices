import { NgModule } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { LayoutComponent } from "../../components/layout/layout.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ContactInfoComponent } from "../../components/contactinfo/contactinfo.component";
import { FollowmeComponent } from "../../components/followme/followme.component";
import { FooterSummaryComponent } from "../../components/footersummary/footersummary.component";
import { FooterNavigationComponent } from "../../components/footernavigation/footernavigation.component";
import { FooterCopyrightComponent } from "../../components/footercopyright/footercopyright.component";
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { HomeComponent } from "../../components/home/home.component";
import { ReasonsComponent } from "../../components/reasons/reasons.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { AboutUsComponent } from "../../components/aboutus/aboutus.component";
import { VacanciesComponent } from "../../components/vacancies/vacancies.component";
import { ContactUsComponent } from "../../components/contactus/contactus.component";
import { ContactMapComponent } from "../../components/contactmap/contactmap.component";
import { ContactAddressComponent } from "../../components/contactaddress/contactaddress.component";
import { sharedRouteDefinitions } from "../../routing/shared/shared.routes";
import { SocialComponent } from "../../components/social/social.component";
import { SecurityModule } from "../security/security.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule, sharedRouteDefinitions, SecurityModule],
    declarations: [
        HeaderComponent,
        LayoutComponent, FooterComponent,
        ContactInfoComponent, FollowmeComponent, FooterSummaryComponent,
        FooterNavigationComponent, FooterCopyrightComponent, NavigationComponent,
        HomeComponent, ReasonsComponent, FaqComponent, AboutUsComponent,
        SocialComponent,
        VacanciesComponent, ContactUsComponent, ContactMapComponent, ContactAddressComponent
    ],
    exports: [LayoutComponent]
})
class SharedModule {
    constructor() {
        console.log('Shared Module Initialized!');
    }
}

export { SharedModule };