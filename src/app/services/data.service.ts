import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentacno:any

  //redundant datas

  userDetails:any={
    1000:{acno:1000,username:"leo",password:"messi",balance:0,transaction:[]},
    1001:{acno:1001,username:"neymar",password:"neymar",balance:0,transaction:[]},
    1002:{acno:1002,username:"andres",password:"iniesta",balance:0,transaction:[]},
    1003:{acno:1003,username:"luis",password:"suarez",balance:0,transaction:[]}
  }

  constructor() { }

  register(acno:any,username:any,password:any){
      var userDetails=this.userDetails
      if(acno in userDetails){
        return false
      }
      else{
        userDetails[acno]={acno,username,password,balance:0,transaction:[]}
        console.log(userDetails)
        return true
      }
  }


  login(acno:any,pass:any){
    
    var userDetails=this.userDetails
    this.currentUser=userDetails[acno]['username']
   

    if(acno in userDetails){
      if(pass==userDetails[acno]['password']){
        this.currentacno=acno
          return true
      }
      else{
        alert("Incorrect Password")
        return false
      }
    }
    else{
      alert("user not exist")
      return false
    }
  }

  deposit(acno:any,pass:any,d_amount:any){
    let userDetails=this.userDetails
    var amount=parseInt(d_amount)
    if(acno in userDetails){
      if(pass==userDetails[acno]["password"]){
        userDetails[acno]['balance']+=amount

        //add transaction details in transaction array
        userDetails[acno]['transaction'].push({type:'Credit',amount})

        return userDetails[acno]['balance']
        alert("deposited")
      }
      else{
        return false
        alert("incorrect password")
      }
    }
    else{
      return false
      alert("incorrect username")
    }
  
  }

  withdraw(acno1:any,pass1:any,w_amount:any){
    let userDetails=this.userDetails
    var amount=parseInt(w_amount)
    if(acno1 in userDetails){
      if(pass1==userDetails[acno1]['password']){
        if(amount<=userDetails[acno1]['balance']){
          userDetails[acno1]['balance']-=amount

          //add transaction details
          userDetails[acno1]['transaction'].push({type:'Debit',amount})

          return userDetails[acno1]['balance']
        }
        else{
          return false
          alert("Withdraw amount is greater than current balance.")
        }
        
      }else{
        return false
        alert("incorrect password")
      }
    }
    else{
      return false
      alert("incorrect account number")
    }
  }

  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }

}



