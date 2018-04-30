import { Component, Inject, Input } from "@angular/core";
import { IAuthenticationService, AUTH_SERVICE_TOKEN } from "../../services/authentication/iauthentication.service";
import { IAuthTokenStorageService, AUTH_TOKEN_STORAGE_SERVICE_TOKEN } from "../../services/authtokenstorage/iauthtokenstorage.service";
import { IUserProfileService, USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";
import { Router } from "@angular/router";

const INVALID_DEPENDENCY_SERVICES = 'Invalid Dependency Service(s) Specified!';
const INVALID_CREDENTIALS = 'Invalid Credentials Specified!';
const REDIRECT_URI_AFTER_LOGIN = 'home';
const UNKNOWN_ERROR = 'Unknown Error Occurred!';
const GUEST_LOGIN = '';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    selector: 'login-component'
})
class LoginComponent {
    @Input()
    public loginUserName: string = '';
    @Input()
    public loginPassword: string = '';

    public errorMessage: string = '';

    constructor(
        private routerService: Router,
        @Inject(AUTH_SERVICE_TOKEN)
        private authenticationService: IAuthenticationService,
        @Inject(AUTH_TOKEN_STORAGE_SERVICE_TOKEN)
        private authTokenStorageService: IAuthTokenStorageService,
        @Inject(USER_PROFILE_SERVICE_TOKEN)
        private userProfileService: IUserProfileService) {

        let validation = this.routerService && this.authenticationService &&
            this.authTokenStorageService && this.userProfileService;

        if (!validation)
            throw new Error(INVALID_DEPENDENCY_SERVICES);
    }

    login() {
        let credentialsValidationStatus = this.loginUserName && this.loginPassword;

        if (!credentialsValidationStatus) {
            this.errorMessage = INVALID_CREDENTIALS;

            return;
        }

        this.authenticationService
            .authenticate(this.loginUserName, this.loginPassword)
            .subscribe(
                result => {
                    let isAuthenticated = result && result.token;

                    if (!isAuthenticated) {
                        this.errorMessage = UNKNOWN_ERROR;
                        return;
                    }

                    let authToken = result.token;

                    this.authTokenStorageService.setAuthToken(authToken);
                    this.userProfileService.setAuthProfile(this.loginUserName, isAuthenticated);
                    this.routerService.navigate([REDIRECT_URI_AFTER_LOGIN]);
                },
                error => {
                    this.authTokenStorageService.restAuthToken();
                    this.userProfileService.setAuthProfile(GUEST_LOGIN, false);
                });
    }
}

export { LoginComponent };
