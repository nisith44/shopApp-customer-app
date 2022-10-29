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
}
