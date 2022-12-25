import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  orders=[];

  constructor(private userService:UserService,
    private router:Router) { }

  ionViewWillEnter() {
    this.userService.getAllOrders().subscribe((res: any) => {
      this.orders = res.output.orders
      console.log(this.orders);
    })
  }  

  ngOnInit() {
    
  }

  viewOrder(id){
    this.router.navigate(['view-order'],{
      queryParams:{
        id:id
      }
    })
  }

}
