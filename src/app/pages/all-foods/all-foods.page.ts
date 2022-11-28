import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-foods',
  templateUrl: './all-foods.page.html',
  styleUrls: ['./all-foods.page.scss'],
})
export class AllFoodsPage implements OnInit {

  products=[];

  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res.output.products
    })
  }

  viewFood(food){
    console.log(food);
    this.router.navigate(['view-food'],{
      queryParams:{id:food.product_id}
    })
  }

}
