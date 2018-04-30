import { Component, Inject, OnInit } from "@angular/core";
import { IUserProfileService, USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";

const INVALID_DEPENDENCY_SERVICES = 'Invalid Dependency Service(s) Specified!';

@Component({
    moduleId: module.id,
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css'],
    selector: 'navigation-component'
})
class NavigationComponent implements OnInit {

    public loginUserName: string = '';
    public isUserAuthenticated: boolean = false;

    constructor(
        @Inject(USER_PROFILE_SERVICE_TOKEN)
        private userProfileService: IUserProfileService) {
        if (!this.userProfileService) {
            throw new Error(INVALID_DEPENDENCY_SERVICES);
        }
    }

    ngOnInit() {
        this.userProfileService
            .loginEvent
            .subscribe(
                authStatus => {
                    this.loginUserName = this.userProfileService.loginUserName;
                    this.isUserAuthenticated = authStatus;
                },
                error => {
                    this.loginUserName = '';
                    this.isUserAuthenticated = false;
                });
    }
}

export { NavigationComponent };