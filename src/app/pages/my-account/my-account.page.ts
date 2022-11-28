import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  accountForm: FormGroup;
  userData: any;

  constructor(private formBuilder:FormBuilder,private userService:UserService) { 
    this.accountForm = this.formBuilder.group({
      "name": new FormControl('', [Validators.required]),
      "email": new FormControl('', [Validators.required]),
      "phone": new FormControl('', [Validators.required]),
      "address": new FormControl('', [Validators.required]),
    });
  }



  ngOnInit() {
    this.userService.getLoggedUserData().subscribe((res: any) => {
      this.userData=res.output.user
      this.accountForm.patchValue(this.userData)
    })
  }

  submit(){

  }

}
