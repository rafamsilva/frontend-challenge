import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PreloaderService } from 'src/app/services/preloader/preloader-service';

@Injectable({
    providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
    constructor(
        private preloader: PreloaderService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.preloader.showPreloader();
        return next.handle(request)
            .pipe(
                finalize(() => {
                  this.preloader.hidePreloader();
                })
            );
    }
}
