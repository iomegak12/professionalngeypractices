import { InjectionToken } from "@angular/core";

const AUTH_TOKEN_STORAGE_SERVICE_TOKEN: InjectionToken<IAuthTokenStorageService> =
    new InjectionToken<IAuthTokenStorageService>('authTokenStorageService');

interface IAuthTokenStorageService {
    setAuthToken(authToken: string): boolean;
    getAuthToken(): string;
    restAuthToken(): void;
}

export { IAuthTokenStorageService, AUTH_TOKEN_STORAGE_SERVICE_TOKEN };
