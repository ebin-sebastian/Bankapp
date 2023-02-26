import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

user:any

acno:any

sDetails:any


constructor(private ds:DataService,private router:Router,private formbuilder:FormBuilder ) { 

this.user=this.ds.currentUser

this.sDetails=new Date()

}
ngOnInit(): void{
  if(!localStorage.getItem('currentAcno')){
    alert("please login")
    this.router.navigateByUrl('')
  }
}

depositForm=this.formbuilder.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
  d_amount:['',[Validators.required,Validators.pattern('[0-9]+')]]
})


deposit(){

  var acno=this.depositForm.value.acno
  var pass=this.depositForm.value.pass
  var d_amount=this.depositForm.value.d_amount

  if(this.depositForm.valid){
    const result=this.ds.deposit(acno,pass,d_amount)
    if(result){
      alert(`${d_amount} has been deposited. Your current balance is ${result}`)
    }
  }
}

withdrawForm=this.formbuilder.group({
  acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pass1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
  w_amount:['',[Validators.required,Validators.pattern('[0-9]+')]]})

withdraw(){
  var acno1=this.withdrawForm.value.acno1
  var pass1=this.withdrawForm.value.pass1
  var w_amount=this.withdrawForm.value.w_amount

  const result= this.ds.withdraw(acno1,pass1,w_amount)
  if(result){
    alert(`${w_amount} has been withdrawed. Your current balance is ${result}`)
  }
  
}
logout(){
  localStorage.removeItem('currentAcno')
  localStorage.removeItem('currentUser')
  this.router.navigateByUrl('')
}

deleteconfirm(){
  this.acno=JSON.parse(localStorage.getItem('currentAcno') || '')
}
oncancel_func(){
  this.acno=""
}


}
