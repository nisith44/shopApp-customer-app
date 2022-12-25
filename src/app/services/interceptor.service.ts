import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';
import { LoginComponent } from '../modals/login/login.component';


@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor{

  constructor(private router:Router,private modalCtrl:ModalController) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

        }
        return event;
      }), catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {
          this.login()
        }
        if (error.status === 0) {
        }
        return throwError(error);
      }));

  }

  async login() {
    console.log("object");
    const modal = await this.modalCtrl.create({
      component: LoginComponent,
      cssClass:'login-popup',
      showBackdrop:true
    });
    modal.present();
  }

  
}
