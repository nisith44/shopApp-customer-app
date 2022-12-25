import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/modals/login/login.component';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  accountForm: FormGroup;
  userData: any;

  constructor(private formBuilder:FormBuilder,private userService:UserService,
    private commonService:CommonService,private modalCtrl:ModalController,private router:Router) { 
    this.accountForm = this.formBuilder.group({
      "name": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required]),
      "email": new FormControl('', [Validators.required]),
      "phone": new FormControl('', [Validators.required]),
      "address": new FormControl('', [Validators.required]),
    });
  }


  ngOnInit() {
    
  }

  submit(){
    let body={
      name:this.accountForm.value.name,
      password:this.accountForm.value.password,
      email:this.accountForm.value.email,
      phone:this.accountForm.value.phone,
      address:this.accountForm.value.address,
    }
    this.commonService.showLoading();
    this.userService.createAccount(body).subscribe((res:any)=>{
      this.commonService.hideLoading();
      if(res.status=='OK'){
        this.commonService.successToast("Account Created Successfully");
        this.router.navigate(['/home/main'])
      }else{
        this.commonService.errorToast(res.message)
      }
    },(err)=>{
      this.commonService.hideLoading();
      this.commonService.errorToast("Account Creating Failed")
    })
  }

  async login() {
    const modal = await this.modalCtrl.create({
      component: LoginComponent,
      cssClass:'login-popup',
      showBackdrop:true
    });
    modal.present();
  }

}
