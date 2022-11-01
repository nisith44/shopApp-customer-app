import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { StmgService } from 'src/app/services/stmg.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService,
    private router:Router,private commonService:CommonService,private modalCtrl:ModalController,
    private stmg:StmgService) {
    this.loginForm = this.formBuilder.group({
      "username": new FormControl('', [Validators.required,Validators.email]),
      "password": new FormControl('', [Validators.required]),
    });
   }

  ngOnInit() {
  }

  login(){
    if(this.loginForm.valid){
      let body={
        username:this.loginForm.value.username,
        password:this.loginForm.value.password
      }
      this.userService.login(body).subscribe((res:any)=>{
        console.log(res);
        if(res.status=='OK'){
          sessionStorage.setItem('token',res.output.token)
          sessionStorage.setItem('userData',JSON.stringify(res.output.userData))
          this.commonService.successToast("Successfully Logged In");
          this.stmg.updateIsLogged(true)
          this.close();
        }else{
          this.commonService.errorToast("Username Or Password Incorrect")
        }
      },(err)=>{
        this.commonService.errorToast("Login Failed")
      })
    }
  }


  register(){
    this.commonService.errorToast("register alt")
  }

  close(){
    this.modalCtrl.dismiss()
  }


}
