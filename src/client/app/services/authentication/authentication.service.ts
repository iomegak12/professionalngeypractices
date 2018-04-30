import { IAuthenticationService, AUTH_SERVICE_URL_TOKEN } from "./iauthentication.service";
import { HttpClient } from "@angular/common/http";
import { Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";

const INVALID_DEPENDENCIES = 'Invalid Dependency Service(s) Specified!';
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';

class AuthenticationService implements IAuthenticationService {
    constructor(
        private httpService: HttpClient,
        @Inject(AUTH_SERVICE_URL_TOKEN)
        private authenticationServiceUrl: string) {
        let validation = this.httpService && this.authenticationServiceUrl;

        if (!validation)
            throw new Error(INVALID_DEPENDENCIES);
    }

    authenticate(userId: string, password: string): Observable<any> {
        let validation = userId && password;

        if (!validation)
            throw new Error(INVALID_ARGUMENTS);

        let serviceUrl = `${this.authenticationServiceUrl}/authenticate`;
        let result = this.httpService.post(serviceUrl, { userId, password });

        return result;
    }
}

export { AuthenticationService };
