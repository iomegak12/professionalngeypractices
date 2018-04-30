import { Observable } from "rxjs/Observable";
import { InjectionToken } from "@angular/core";

const AUTH_SERVICE_URL_TOKEN: InjectionToken<string> =
    new InjectionToken<string>('authenticationServiceUrl');

const AUTH_SERVICE_TOKEN: InjectionToken<IAuthenticationService> =
    new InjectionToken<IAuthenticationService>('authenticationService');

interface IAuthenticationService {
    authenticate(userId: string, password: string): Observable<any>;
}

export { IAuthenticationService, AUTH_SERVICE_TOKEN, AUTH_SERVICE_URL_TOKEN };
