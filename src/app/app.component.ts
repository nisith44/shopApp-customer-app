import { Component } from '@angular/core';
import { StmgService } from './services/stmg.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private stmg:StmgService) {
    let token=sessionStorage.getItem('token');
    if(token){stmg.updateIsLogged(true)}

    let cart=localStorage.getItem('cart');
    if(!cart){localStorage.setItem('cart',"[]")}else{stmg.updateCart(JSON.parse(cart))}
  }
}
