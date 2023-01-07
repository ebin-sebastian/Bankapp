import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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



  constructor(private router:Router,private ds:DataService){

  }


  login(){
    
    var acno=this.acno
    var pass=this.pass
    
    const result=this.ds.login(acno,pass)
    if(result){
      
      this.router.navigateByUrl("dashboard")
    }
  }
}
