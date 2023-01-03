import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //redundant datas

  userDetails:any={
    1000:{acno:1000,username:"leo",password:"messi",balance:0},
    1001:{acno:1001,username:"neymar",password:"neymar",balance:0},
    1002:{acno:1002,username:"andres",password:"iniesta",balance:0},
    1003:{acno:1003,username:"luis",password:"suarez",balance:0}
  }

  constructor() { }

  register(acno:any,username:any,password:any){
      var userDetails=this.userDetails
      if(acno in userDetails){
        return false
      }
      else{
        userDetails[acno]={acno,username,password,balance:0}
        console.log(userDetails)
        return true
      }
  }
}
