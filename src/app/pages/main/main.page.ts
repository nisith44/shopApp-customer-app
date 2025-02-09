import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  categories=[];
  promotions=[];

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit() {
    this.productService.getHomePageProducts({}).subscribe((res:any)=>{
      this.categories=res.output.categories
    })

    this.productService.getPromotions({}).subscribe((res:any)=>{
      this.promotions=res.output.promotions;
      console.log(this.promotions);
    })
  }

  viewFood(food){
    console.log(food);
    this.router.navigate(['view-food'],{
      queryParams:{id:food.product_id}
    })
  }

  gotoCat(cat){
    this.router.navigate(['category-foods'],{
      queryParams:{category:cat.name}
    })
  }

}
