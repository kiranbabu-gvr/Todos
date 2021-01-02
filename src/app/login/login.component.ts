import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthServiceService } from '../service/hard-coded-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private hardCodedAuthServiceService: HardCodedAuthServiceService) { }

  username = 'In28Minutes'
  password=''
  invalidLogin = false
  errrMessage = 'Invalid Login'
  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username)
    //if(this.username === 'In28Minutes' && this.password === 'dummy'){
      if(this.hardCodedAuthServiceService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

}
