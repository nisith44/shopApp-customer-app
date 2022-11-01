import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/modals/login/login.component';
import { StmgService } from 'src/app/services/stmg.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged: any;

  constructor(private modalCtrl:ModalController,private stmg:StmgService) { }

  ngOnInit() {
    this.stmg.isLogged_obs.subscribe((res)=>{
      console.log(res);
      this.isLogged=res
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
    this.stmg.updateIsLogged(false)
  }

}
