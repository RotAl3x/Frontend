import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit{
  isSecretary:boolean=true;
  isLabAssistant:boolean=false;


  constructor(private authService:AuthService){

  }
  async ngOnInit() {
    await delay(1000);
    this.isSecretary=await this.authService.hasRole('Secretary');
    this.isLabAssistant=await this.authService.hasRole('LabAssistant');
    // location.reload()
  }

}
