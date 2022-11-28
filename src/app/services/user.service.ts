import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  login(body:any): Observable<any>{
    const url=environment.baseUrl+'user/login'
    return this.httpClient.post(url,body);
  }

  getAllOrders(): Observable<any>{
    const url=environment.baseUrl+'order/get-all-orders'
    let token =sessionStorage.getItem('token')
    return this.httpClient.get(url,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
  }

  getOrder(body): Observable<any>{
    const url=environment.baseUrl+'order/get-order'
    let token =sessionStorage.getItem('token')
    return this.httpClient.post(url,body,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
  }

  getLoggedUserData(): Observable<any>{
    const url=environment.baseUrl+'user/get-logged-user-data'
    let token =sessionStorage.getItem('token')
    return this.httpClient.get(url,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
  }

}
