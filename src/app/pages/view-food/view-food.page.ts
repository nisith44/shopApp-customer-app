import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,
    private stmg :StmgService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      console.log(params);
      this.productService.getSingleProduct({productId:params.id}).subscribe((res:any)=>{
        console.log(res);
        this.product=res.output.product
      })
    })
  }

  addToCart(){
    let cart=JSON.parse(localStorage.getItem('cart'));
    let product={
      id:this.product.product_id,
      title:this.product.title,
      qty:this.qty,
      price:this.product.price
    }
    cart.push(product)
    localStorage.setItem('cart',JSON.stringify(cart))
    console.log(cart);
  }

  increase(){
    this.qty=this.qty+1
  }

  decrease(){
    this.qty=this.qty-1
  }

}
