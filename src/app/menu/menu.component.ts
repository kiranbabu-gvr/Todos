import { Component, OnInit } from '@angular/core';
import { HardCodedAuthServiceService } from '../service/hard-coded-auth-service.service';
import { RouteGuardService } from '../service/route-guard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public hardCodedAuthServiceService: HardCodedAuthServiceService) { }

  //isUserLoggedIn:boolean = false;

  ngOnInit(): void {
    //this.isUserLoggedIn = this.hardCodedAuthServiceService.isUserLoggedIn();
  }


}
