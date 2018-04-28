import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const JSON_CONTENT_TYPE = 'application/json';

class JsonHttpHeadersInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let nextRequest = req;

        if (req && next) {
            nextRequest = req.clone({
                setHeaders: {
                    'Content-Type': JSON_CONTENT_TYPE,
                    'Accept': JSON_CONTENT_TYPE
                }
            });
        }

        return next.handle(nextRequest);
    }
}

export { JsonHttpHeadersInterceptor };
