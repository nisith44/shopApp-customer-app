import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StmgService } from 'src/app/services/stmg.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  carts=[];

  constructor(private stmg:StmgService,private router:Router) { }

  ngOnInit() {
    this.stmg.cart_obs.subscribe((res)=>{
      console.log(res);
      this.carts=res
      this.calcTotal()
    })
  }

  increase(i){
    this.carts[i].qty=this.carts[i].qty+1
    this.updateCart()
  }

  decrease(i){
    this.carts[i].qty=this.carts[i].qty-1
    this.updateCart()
  }

  remove(i){
    this.carts.splice(i, 1);
    this.updateCart()
  }

  updateCart(){
    localStorage.setItem('cart',JSON.stringify(this.carts))
    this.stmg.updateCart(this.carts);
    this.calcTotal()
  }

  total=0
  calcTotal(){
    this.total=0
    this.carts.forEach((c) => {
      this.total=this.total+(c.price*c.qty)
    });
  }

  checkout(){
    this.router.navigate(['checkout'])
  }

}
