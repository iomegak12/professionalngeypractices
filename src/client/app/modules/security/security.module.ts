import { IAuthTokenStorageService, AUTH_TOKEN_STORAGE_SERVICE_TOKEN } from "../../services/authtokenstorage/iauthtokenstorage.service";
import { Inject, NgModule } from "@angular/core";
import { securityRouteDefinitions } from "../../routing/security/security.routes";
import { LoginComponent } from "../../components/login/login.component";
import { USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";
import { UserProfileService } from "../../services/userprofile/userprofile.service";
import { AUTH_SERVICE_TOKEN, AUTH_SERVICE_URL_TOKEN } from "../../services/authentication/iauthentication.service";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { AuthTokenStorageService } from "../../services/authtokenstorage/authtokenstorage.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthHttpHeadersInterceptor } from "../../extensibility/authhttpheaders.interceptor";
import { FormsModule } from "@angular/forms";
import { LogoutComponent } from "../../components/logout/logout.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule, FormsModule, securityRouteDefinitions],
    declarations: [LoginComponent, LogoutComponent],
    providers: [
        {
            provide: USER_PROFILE_SERVICE_TOKEN,
            useClass: UserProfileService
        },
        {
            provide: AUTH_SERVICE_TOKEN,
            useClass: AuthenticationService
        },
        {
            provide: AUTH_SERVICE_URL_TOKEN,
            useFactory: () => {
                let serviceUrl = '';

                let buildType = String('<%= BUILD_TYPE %>');

                if (buildType === 'prod') {
                    serviceUrl = String('<%= PROD_AUTH_SERVICE_URL %>');
                } else {
                    serviceUrl = String('<%= DEV_AUTH_SERVICE_URL %>');
                }

                return serviceUrl;
            }
        },
        {
            provide: AUTH_TOKEN_STORAGE_SERVICE_TOKEN,
            useClass: AuthTokenStorageService
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpHeadersInterceptor,
            multi: true
        }
    ]
})
class SecurityModule {
    constructor(
        @Inject(AUTH_TOKEN_STORAGE_SERVICE_TOKEN)
        private authTokenStorageService: IAuthTokenStorageService) {
        if (this.authTokenStorageService) {
            this.authTokenStorageService.restAuthToken();
        }
    }
}

export { SecurityModule };
