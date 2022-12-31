import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  acno:any
  pass:any

  aim="this is it"
  phacno="Account Number"
  phpass="Password"


  userDetails:any={
    1000:{acno:1000,username:"leo",password:"messi",balance:0},
    1001:{acno:1001,username:"neymar",password:"neymar",balance:0},
    1002:{acno:1002,username:"andres",password:"iniesta",balance:0},
    1003:{acno:1003,username:"luis",password:"suarez",balance:0}
  }


  login(){
    
    var acno=this.acno
    var pass=this.pass
    var userDetails=this.userDetails
    //the above statement help us to not call each variable by "this" fuction everytime

    if(acno in userDetails){
      if(pass==userDetails[acno]['password']){
          alert("Login Success")
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert("user not exist")
    }
  }

    
}
