import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname:any
  acno:any
  pass:any

  constructor(private ds:DataService ) { }



  register(){

      var uname=this.uname
      var acno= this.acno
      var pass= this.pass
    
    const result=this.ds.register(acno,uname,pass)
    if(result){
      alert("Registration Success")
    }
    else{
      alert("Registration Failed")
    }

  }

}
