import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-foods',
  templateUrl: './category-foods.page.html',
  styleUrls: ['./category-foods.page.scss'],
})
export class CategoryFoodsPage implements OnInit {
  products=[];
  category='';

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,
    private router:Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.category=params.category
      this.productService.getCategoryProducts({category:params.category}).subscribe((res:any)=>{
        console.log(res);
        this.products=res.output.products
      })
    })
  }

  viewFood(food){
    console.log(food);
    this.router.navigate(['view-food'],{
      queryParams:{id:food.product_id}
    })
  }

}
