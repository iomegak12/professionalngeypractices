import { IAuthTokenStorageService, AUTH_TOKEN_STORAGE_SERVICE_TOKEN } from "../../services/authtokenstorage/iauthtokenstorage.service";
import { Inject, OnInit, Component } from "@angular/core";
import { IUserProfileService, USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";
import { Router } from "@angular/router";

const INVALID_DEPENDENCY_SERVICES = 'Invalid Dependency Service(s) Specified!';
const REDIRECT_URI_AFTER_LOGOUT = 'home';

@Component({
    moduleId: module.id,
    template: '',
    selector: 'logout-component'
})
class LogoutComponent {
    constructor(
        private routerService: Router,
        @Inject(USER_PROFILE_SERVICE_TOKEN)
        private userProfileService: IUserProfileService,
        @Inject(AUTH_TOKEN_STORAGE_SERVICE_TOKEN)
        private authTokenStorageService: IAuthTokenStorageService) {

        let validation = this.authTokenStorageService &&
            this.userProfileService && this.routerService;

        if (!validation) {
            throw new Error(INVALID_DEPENDENCY_SERVICES);
        }

        this.authTokenStorageService.restAuthToken();
        this.userProfileService.setAuthProfile('', false);
        this.routerService.navigate([REDIRECT_URI_AFTER_LOGOUT]);
    }
}

export { LogoutComponent };
