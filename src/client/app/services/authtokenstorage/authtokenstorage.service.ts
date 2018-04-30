import { IAuthTokenStorageService } from "./iauthtokenstorage.service";

const EY_AUTH_TOKEN_KEY = 'eyatk';
const MIN_AUTH_TOKEN_LENGTH = 10;
const INVALID_AUTH_TOKEN_KEY = 'Invalid Authentication Token Key Specified!';

class AuthTokenStorageService implements IAuthTokenStorageService {
    setAuthToken(authToken: string): boolean {
        let validation = authToken && authToken.length >= MIN_AUTH_TOKEN_LENGTH;

        if (!validation)
            throw new Error(INVALID_AUTH_TOKEN_KEY);

        localStorage.setItem(EY_AUTH_TOKEN_KEY, authToken);

        let registeredAuthToken = localStorage.getItem(EY_AUTH_TOKEN_KEY);
        let status = registeredAuthToken !== null;

        return status;
    }

    getAuthToken(): string {
        let registeredAuthToken = localStorage.getItem(EY_AUTH_TOKEN_KEY);

        return registeredAuthToken;
    }

    restAuthToken(): void {
        localStorage.removeItem(EY_AUTH_TOKEN_KEY);
    }
}

export { AuthTokenStorageService };
