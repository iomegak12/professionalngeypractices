import { IPushNotificationsService, PUSH_NOTIFICATIONS_SERVICE_URL_TOKEN } from "./ipushnotifications.service";
import { Inject } from "@angular/core";

declare class io {
    static connect(url: string): any;
}

const MIN_INSERT_INDEX = 0;
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';
const SERVER_SIDE_EVENTS = ['NewCustomerRecord'];

class PushNotificationsService implements IPushNotificationsService {
    private registeredCallbacks: ((notificationMessage: any) => void)[] = [];
    private socketClient: any;

    constructor(
        @Inject(PUSH_NOTIFICATIONS_SERVICE_URL_TOKEN)
        private pushNotificationsServiceUrl: string) {
        this.initializeSocketConnection();
        this.registerServerEventHandler();
    }

    initializeSocketConnection() {
        this.socketClient = io.connect(this.pushNotificationsServiceUrl);
    }

    registerServerEventHandler() {
        if (this.socketClient) {
            SERVER_SIDE_EVENTS.forEach(
                eventName => {
                    this.socketClient.on(eventName, (notificationMessage: any) => {
                        if (notificationMessage) {
                            this.registeredCallbacks.forEach(
                                callback => callback(notificationMessage));
                        }
                    });
                });
        }
    }

    registerCallback(callback: (notificationMessage: any) => void): boolean {
        let validation = callback && typeof callback === 'function';

        if (!validation)
            throw new Error(INVALID_ARGUMENTS);

        let insertIndex = this.registeredCallbacks.push(callback);

        return insertIndex >= MIN_INSERT_INDEX;
    }
}

export { PushNotificationsService };
