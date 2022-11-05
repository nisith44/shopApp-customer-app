import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/modals/login/login.component';
import { CommonService } from 'src/app/services/common.service';
import { ProductService } from 'src/app/services/product.service';
import { StmgService } from 'src/app/services/stmg.service';

@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.page.html',
  styleUrls: ['./view-food.page.scss'],
})
export class ViewFoodPage implements OnInit {
  qty=1
  product: any;
  isLogged: any;

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,
    private stmg :StmgService,private modalCtrl:ModalController,private commonService:CommonService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      console.log(params);
      this.productService.getSingleProduct({productId:params.id}).subscribe((res:any)=>{
        console.log(res);
        this.product=res.output.product
      })
    })
    this.stmg.isLogged_obs.subscribe((res)=>{
      this.isLogged=res
    })
  }

  addToCart(){
    if(this.isLogged){
      let cart=JSON.parse(localStorage.getItem('cart'));
      let product={
        id:this.product.product_id,
        title:this.product.title,
        qty:this.qty,
        price:this.product.price,
        img:this.product.img
      }
      cart.push(product)
      localStorage.setItem('cart',JSON.stringify(cart))
      this.stmg.updateCart(cart);
      this.commonService.successToast("Item Added to Cart")
      console.log(cart);
    }else{
      this.login()
    }
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

  increase(){
    this.qty=this.qty+1
  }

  decrease(){
    this.qty=this.qty-1
  }

}
