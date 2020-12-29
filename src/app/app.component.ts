import {AfterViewInit, Component, Injectable, OnInit} from '@angular/core';
import {AuthenticationService} from "./service/AuthenticationService";
import {Router} from "@angular/router";
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()  
export class AppComponent  implements OnInit {

  


  panelError:number=0;
     user:any;
     panel =0;

     setUser(){
      console.log(" destroy");
     }

     ngAfterViewInit(user:any){
        this.user=user;
     }
  ngOnInit(){

    
    console.log("le type est"+this.user);
    //console.log("auth.est   "+this.authenticationService.isAdmin()) 

  }
  constructor(public authenticationService:AuthenticationService,private router:Router) { }

  onLogin(formData){

    this.authenticationService.login(formData).subscribe(
      data=>{
        let jwtToken=data.headers.get('authorization');
        console.log(jwtToken);
        this.authenticationService.saveToken(jwtToken);

        this.router.navigateByUrl('Home');
      },
      error=>{
        this.panelError=1;
      }
    )
  }

  onLogOut(){
    this.authenticationService.logOut();
    this.router.navigateByUrl('index');
    this.panel=0;


  }































}
