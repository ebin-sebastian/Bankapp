import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname:any
  acno:any
  pass:any

  constructor(private ds:DataService,private router:Router,private formbuilder:FormBuilder ) { }

  //create register form model

  registerForm=this.formbuilder.group({uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],acno:['',[Validators.required,Validators.pattern('[0-9]+')]],pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]})

  register(){

      var uname=this.registerForm.value.uname
      var acno= this.registerForm.value.acno
      var pass= this.registerForm.value.pass
    
    

    if(this.registerForm.valid){
      const result=this.ds.register(acno,uname,pass)
    

          if(result){
            alert("Registration Success")
            this.router.navigateByUrl("")
                    }
          else{
              alert("Registration Failed")
              }

                              }
  else{
      alert("form is invalid")
  }
}

}
