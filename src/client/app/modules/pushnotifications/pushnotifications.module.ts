import { NgModule } from "@angular/core";
import { PUSH_NOTIFICATIONS_SERVICE_URL_TOKEN, PUSH_NOTIFICATIONS_SERVICE_TOKEN } from "../../services/pushnotifications/ipushnotifications.service";
import { PushNotificationsService } from "../../services/pushnotifications/pushnotifications.service";

@NgModule({
    providers: [
        {
            provide: PUSH_NOTIFICATIONS_SERVICE_URL_TOKEN,
            useFactory: () => {
                let serviceUrl = '';

                let buildType = String('<%= BUILD_TYPE %>');

                if (buildType === 'prod') {
                    serviceUrl = String('<%= PROD_PUSH_NOTIFICATIONS_SERVICE_URL %>');
                } else {
                    serviceUrl = String('<%= DEV_PUSH_NOTIFICATIONS_SERVICE_URL %>');
                }

                return serviceUrl;
            }
        },
        {
            provide: PUSH_NOTIFICATIONS_SERVICE_TOKEN,
            useClass: PushNotificationsService
        }
    ]
})
class PushNotificationsModule {
    constructor() {
        console.log('Push Notifications Module Initialized!');
    }
}

export { PushNotificationsModule };