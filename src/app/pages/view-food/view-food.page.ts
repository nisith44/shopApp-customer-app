import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.page.html',
  styleUrls: ['./view-food.page.scss'],
})
export class ViewFoodPage implements OnInit {
  qty=1
  product: any;

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) { }

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

  }

  increase(){
    this.qty=this.qty+1
  }

  decrease(){
    this.qty=this.qty-1
  }

}
