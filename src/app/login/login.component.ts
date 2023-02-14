import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  aim="this is it"
  phacno="Account Number"
  phpass="Password" 



  constructor(private router:Router,private ds:DataService,private formbuilder:FormBuilder){

  }
  //create login form model

  loginForm=this.formbuilder.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]})

  login(){
    
    var acno=this.loginForm.value.acno
    var pass=this.loginForm.value.pass
 
    if(this.loginForm.valid){
      const result=this.ds.login(acno,pass)
    if(result){
      
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert("Username or password is incorrect")
    }

    }
    else{
      alert("Invalid Form")
    }
    
    
  }
}
