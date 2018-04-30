import { Subject } from "rxjs/Subject";
import { InjectionToken } from "@angular/core";

const USER_PROFILE_SERVICE_TOKEN: InjectionToken<IUserProfileService> =
    new InjectionToken<IUserProfileService>('userProfileService');

interface IUserProfileService {
    loginUserName: string;
    isUserAuthenticated: boolean;
    loggedInTime: Date;
    loginEvent: Subject<boolean>;

    setAuthProfile(loginUserName: string, authenticationStatus: boolean): void;
}

export { IUserProfileService, USER_PROFILE_SERVICE_TOKEN };
