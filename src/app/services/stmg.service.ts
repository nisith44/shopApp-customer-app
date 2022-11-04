import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StmgService {

  constructor() { }

  private isLogged = new BehaviorSubject<any>(false);
  isLogged_obs = this.isLogged.asObservable();

  updateIsLogged(d: any) {
    this.isLogged.next(d);
  }


  private cart = new BehaviorSubject<any>([]);
  cart_obs = this.cart.asObservable();

  updateCart(d: any) {
    this.cart.next(d);
  }

}
