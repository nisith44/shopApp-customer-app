import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService,
    private router:Router) {
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
          this.router.navigate(['home/main'])
        }
      })
    }
  }

}
