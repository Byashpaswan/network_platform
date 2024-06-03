import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  username:any;
  password:any;
  obj:any

  constructor(private formBuilder:FormBuilder,private userservice:UserService )
  {
    this. loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]

    });
  }

 onLogin(){
    if(this.loginForm.valid)
      {
          this.username=this.loginForm.get('username')?.value;
          this.password=this.loginForm.get('password')?.value;
      }
     
      this.obj = {
        username: this.username,
        password: this.password
      };
      // console.log('obj--',obj)
      
      // Call the login method of the UserService and subscribe to the response
      this.userservice.login(this.obj).subscribe(res => {
        
        // console.log("responce--",res)
      });

  }
 }

