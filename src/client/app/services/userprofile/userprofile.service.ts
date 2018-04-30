import { IUserProfileService } from "./iuserprofile.service";
import { Subject } from "rxjs/Subject";

class UserProfileService implements IUserProfileService {
    private _loginUserName: string = '';
    private _isUserAuthenticated: boolean = false;
    private _loggedInTime: Date;
    private _loginEvent: Subject<boolean>;

    constructor() {
        this._loginEvent = new Subject<boolean>();
    }

    get loginUserName() {
        return this._loginUserName;
    }

    get isUserAuthenticated() {
        return this._isUserAuthenticated;
    }

    get loggedInTime() {
        return this._loggedInTime;
    }

    get loginEvent() {
        return this._loginEvent;
    }

    setAuthProfile(loginUserName: string, authenticationStatus: boolean) {
        this._loginUserName = loginUserName;
        this._isUserAuthenticated = authenticationStatus;
        this._loggedInTime = new Date();

        this._loginEvent.next(authenticationStatus);
    }
}

export { UserProfileService };
