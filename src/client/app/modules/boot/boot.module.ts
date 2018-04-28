import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BootComponent } from '../../components/boot/boot.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonHttpHeadersInterceptor } from '../../extensibility/jsonhttpheaders.interceptor';
import { CrmSystemModule } from '../crmsystem/crmsystem.module';

@NgModule({
    imports: [BrowserModule, SharedModule, HttpClientModule, CrmSystemModule],
    declarations: [BootComponent],
    bootstrap: [BootComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JsonHttpHeadersInterceptor,
            multi: true
        }
    ]
})
class BootModule {
    constructor() {
        console.log('Boot Module Initialized!');
    }
}

export { BootModule };
