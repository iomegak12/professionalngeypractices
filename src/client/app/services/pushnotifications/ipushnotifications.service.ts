import { InjectionToken } from "@angular/core";

const PUSH_NOTIFICATIONS_SERVICE_URL_TOKEN: InjectionToken<string> =
    new InjectionToken<string>('pushNotificationsServiceUrl');

const PUSH_NOTIFICATIONS_SERVICE_TOKEN: InjectionToken<IPushNotificationsService> =
    new InjectionToken<IPushNotificationsService>('pushNotificationsService');

interface IPushNotificationsService {
    registerCallback(callback: (notificationMessage: any) => void): boolean;
}

export { IPushNotificationsService, PUSH_NOTIFICATIONS_SERVICE_TOKEN, PUSH_NOTIFICATIONS_SERVICE_URL_TOKEN };
