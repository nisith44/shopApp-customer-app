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
    })
  }

}
