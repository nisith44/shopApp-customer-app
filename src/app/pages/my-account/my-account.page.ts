import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  accountForm: FormGroup;
  userData: any;

  constructor(private formBuilder:FormBuilder,private userService:UserService,
    private commonService:CommonService) { 
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
    let body={
      name:this.accountForm.value.name,
      email:this.accountForm.value.email,
      phone:this.accountForm.value.phone,
      address:this.accountForm.value.address,
    }
    this.commonService.showLoading();
    this.userService.updateAccount(body).subscribe((res:any)=>{
      this.commonService.hideLoading();
      if(res.status=='OK'){
        this.commonService.successToast("Account Details Successfully Updated")
      }else{
        this.commonService.errorToast("Account Details Updating Failed")
      }
    },(err)=>{
      this.commonService.hideLoading();
      this.commonService.errorToast("Account Details Updating Failed")
    })
  }

}
