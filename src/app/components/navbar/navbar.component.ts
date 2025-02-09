import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/modals/login/login.component';
import { StmgService } from 'src/app/services/stmg.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged: any;
  cart=[];
  loginSub: Subscription;
  cartSub: Subscription;

  constructor(private modalCtrl:ModalController,private stmg:StmgService,private router:Router,
    private menuController:MenuController) { }


  ngOnInit() {
    this.loginSub= this.stmg.isLogged_obs.subscribe((res)=>{
      this.isLogged=res
    })
    this.cartSub=this.stmg.cart_obs.subscribe((res)=>{
      console.log(res);
      this.cart=res
    })
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

  logout(){
    sessionStorage.clear()
    localStorage.clear()
    this.stmg.updateIsLogged(false)
    this.stmg.updateCart([])
  }

  gotoCart(){
    this.router.navigate(['cart'])
  }

  gotoPage(r){
    this.router.navigate([r])
  }

  ngOnDestroy(){
    this.loginSub.unsubscribe();
    this.cartSub.unsubscribe();
  }

}
