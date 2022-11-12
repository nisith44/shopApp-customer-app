import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ProductService } from 'src/app/services/product.service';
import { StmgService } from 'src/app/services/stmg.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  carts=[];
  userData: any;
  address=""
  products=[]

  constructor(private stmg:StmgService,private productService:ProductService,
    private commonService:CommonService) { }

  ngOnInit() {
    this.stmg.cart_obs.subscribe((res)=>{
      console.log(res);
      this.carts=res
      this.calcTotal()
    })
    this.userData=JSON.parse(sessionStorage.getItem('userData'));
    this.address=this.userData.address
  }

  total=0
  calcTotal(){
    this.total=0
    this.carts.forEach((c,i) => {
      this.total=this.total+(c.price*c.qty)
      this.products.push({
        "product_id":c.id,
        "qty":c.qty,
        "price":c.price,
        "total":c.price*c.qty
      })
    });
  }

  placeOrder(){
    let body={
      products:this.products,
      total:this.total
    }
    this.commonService.showLoading();
    this.productService.addNewOrder(body).subscribe((res:any)=>{
      this.commonService.hideLoading()
      if(res.status=="OK"){
        this.commonService.successToast("Order Placed Successfully")
      }else{
        this.commonService.errorToast("Order Failed")
      }
    },(err)=>{
      this.commonService.hideLoading()
      this.commonService.errorToast("Order Failed")
    })
  }

}
