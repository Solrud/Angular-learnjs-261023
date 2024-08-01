import {Inject, Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from './base-url.const';
import {tap} from 'rxjs/operators';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    constructor(@Inject(BASE_URL) private baseUrl: string) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log(request);

        const newRequest = request.clone({
            url: this.baseUrl + request.url,
        });

        return next.handle(newRequest).pipe(tap(console.log));
    }
}
