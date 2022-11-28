import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.page.html',
  styleUrls: ['./view-order.page.scss'],
})
export class ViewOrderPage implements OnInit {
  order: any;

  constructor(private userService:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      console.log(params);
      let body={
        id:params.id
      }
      this.userService.getOrder(body).subscribe((res: any) => {
        this.order=res.output.order
        console.log(this.order);
      })
    })
    
  }

}
