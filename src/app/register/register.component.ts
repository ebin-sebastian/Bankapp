import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname:any
  acno:any
  pass:any

  constructor(private ds:DataService,private router:Router ) { }



  register(){

      var uname=this.uname
      var acno= this.acno
      var pass= this.pass
    
    const result=this.ds.register(acno,uname,pass)
    if(result){
      alert("Registration Success")
      this.router.navigateByUrl("")
    }
    else{
      alert("Registration Failed")
    }

  }

}
