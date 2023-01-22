import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getHomePageProducts(body:any): Observable<any>{
    const url=environment.baseUrl+'product/get-home-page-products'
    return this.httpClient.get(url);
  }

  getAllProducts(): Observable<any>{
    const url=environment.baseUrl+'product/get-all-products'
    return this.httpClient.get(url);
  }

  getSingleProduct(body:any): Observable<any>{
    const url=environment.baseUrl+'product/get-single-product'
    return this.httpClient.post(url,body);
  }

  getCategoryProducts(body:any): Observable<any>{
    const url=environment.baseUrl+'product/get-category-products'
    return this.httpClient.post(url,body);
  }

  getPromotions(body:any): Observable<any>{
    const url=environment.baseUrl+'promotion/get-home-banners'
    return this.httpClient.post(url,body);
  }

  addNewOrder(body:any): Observable<any>{
    const url=environment.baseUrl+'order/add-new-order'
    let token =sessionStorage.getItem('token')
    return this.httpClient.post(url,body,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
  }

}
