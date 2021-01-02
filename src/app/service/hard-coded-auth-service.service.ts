import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthServiceService {

  constructor() { }

  
  authenticate(username, password){
    console.log("Before : "+ this.isUserLoggedIn());
    if(username==="In28Minutes" && password==="dummy"){
      sessionStorage.setItem("authenticatedUser", username);
      console.log("After : "+ this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser");
    //if(!sessionStorage.getItem("authenticatedUser")===null){
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem("authenticatedUser");
  }
 
}
