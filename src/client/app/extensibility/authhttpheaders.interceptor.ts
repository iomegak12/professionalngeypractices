import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { IAuthTokenStorageService, AUTH_TOKEN_STORAGE_SERVICE_TOKEN } from "../services/authtokenstorage/iauthtokenstorage.service";
import { Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";

const BEARER = 'Bearer';
const INVALID_DEPENDENCY_SERVICES = 'Invalid Dependency Service(s) Specified!';
const MIN_AUTH_TOKEN_LENGTH = 10;

class AuthHttpHeadersInterceptor implements HttpInterceptor {
    constructor(
        @Inject(AUTH_TOKEN_STORAGE_SERVICE_TOKEN)
        private authTokenStorageService: IAuthTokenStorageService) {
        if (!authTokenStorageService) {
            throw new Error(INVALID_DEPENDENCY_SERVICES);
        }
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let nextRequest = req;
        let authToken = this.authTokenStorageService.getAuthToken();
        let authTokenValidation = authToken && authToken.length >= MIN_AUTH_TOKEN_LENGTH;

        if(authTokenValidation) {
            nextRequest = req.clone({
                setHeaders: {
                    'Authorization': `${BEARER} ${authToken}`
                }
            });
        }

        return next.handle(nextRequest);
    }
}

export { AuthHttpHeadersInterceptor };
