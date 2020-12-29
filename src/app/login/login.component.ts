import { Component, OnInit } from '@angular/core';
import {User} from "../com.project.frontEnd.model/User";
import {AuthenticationService} from "../service/AuthenticationService";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorPanel:number=0;

  constructor(private auth:AuthenticationService,private router:Router,private appComponent:AppComponent) { }

  ngOnInit() {
    this.auth.logOut();
    this.router.navigateByUrl('index');
  }

  ngOnDestroy(){
    console.log(" destroy here");
    this.appComponent.ngAfterViewInit(this.auth.loadUser());
  }



  onLogin(formData){

       this.auth.login(formData).subscribe(
      data=>{
        let jwtToken=data.headers.get('authorization');
        console.log(jwtToken);
        this.auth.saveToken(jwtToken);
        this.appComponent.panel=1
        this.router.navigateByUrl('Home');
        //console.log(this.auth.isAdmin())
        ;
      },
      error=>{
        this.errorPanel=1;
      }
    )

  }
}
