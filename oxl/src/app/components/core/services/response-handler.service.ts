import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerService implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((success)=>{
      if(success instanceof HttpResponse) {
        if(success.url.endsWith('login') || success.url.endsWith('register') 
        || success.url.includes('create') || success.url.endsWith('delete')){
          this.toastr.success(success['body']['message'],'Success')
        } 
      }
    }),catchError((err) => {
      this.toastr.error(err.error['message'], 'Error')
      throw err;
    }))
  }

}
