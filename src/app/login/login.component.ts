import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';
import { Jwtresponse } from 'src/app/shared/jwtresponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm: FormGroup;
  isSubmitted:boolean = false;
  error:string = '';
  jwtresponse:any = new Jwtresponse();
  
  constructor(private formBuilder: FormBuilder, public loginService:LoginService, private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group(
      {
        //emailId
        emailId: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4), Validators.email]],

        //password
        password: ['', [Validators.required]]
      }
    )
  }

  get formControls(){
    return this.loginForm.controls;
  }

  submitForm():void{
    console.log(this.loginForm.value);
    this.isSubmitted = true;

    //call service
    if(this.loginForm.invalid){
      this.error="Invalid credentials";
      console.log("Invaid");
      return;
    }
    if(this.loginForm.valid){
      this.loginService.getLoginFromApi(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          console.log('kjnkjb');
          this.error ='';
          this.jwtresponse = result;

          //route to respective pages based on role
          if(this.jwtresponse.data.role === 5){
            this.router.navigateByUrl('/order');
          }
          if(this.jwtresponse.data.role === 1){
            this.router.navigateByUrl('/customer');
          }


        },
        (error) => {
          console.log(error);
          this.error="Invalid Credentials";
        }
      );
    }
  }
}
