import { Component } from '@angular/core';
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
pass:any
acno1:any
pass1:any
d_amount:any
w_amount:any



constructor(private ds:DataService,private router:Router ) { 

this.user=this.ds.currentUser

}

deposit(){
  var acno=this.acno
  var pass=this.pass
  var d_amount=this.d_amount
  const result=this.ds.deposit(acno,pass,d_amount)
  if(result){
    alert(`${d_amount} has been deposited. Your current balance is ${result}`)
  }
  //alert("deposit worked")
}

withdraw(){
  var acno1=this.acno1
  var pass1=this.pass1
  var w_amount=this.w_amount
  const result= this.ds.withdraw(acno1,pass1,w_amount)
  if(result){
    alert(`${w_amount} has been withdrawed. Your current balance is ${result}`)
  }
  //alert("withdraw worked")
}

}
