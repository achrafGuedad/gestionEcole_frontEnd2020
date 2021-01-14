import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Inscription} from "../com.project.frontEnd.model/Inscription";
import {AuthenticationService} from "./AuthenticationService";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InscriptionService {

  private uriApi_create;
  private uri_getInscriptionByUsername;

  constructor(private httpClient:HttpClient,private  auth:AuthenticationService) {}

  //--------
  private jwt:any;






  public saveEtudiantApi(inscription:Inscription,idClasse:number){
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }
    this.uriApi_create= "http://localhost:8080/Account/createEtudiant/ETUDIANT/"+idClasse;
    let headers=new HttpHeaders();
    headers.append('authorization',this.jwt);
    return  this.httpClient.post(this.uriApi_create,inscription,{headers:new HttpHeaders({'Authorization':this.jwt})
    });

  }


  // GET
  public getInscriptionEtudiantByUsername(username:string){
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }
    this.uri_getInscriptionByUsername= "http://localhost:8080/Inscription/getInscriptionByUsername/"+username;
    let headers=new HttpHeaders();
    headers.append('authorization',this.jwt);
    return  this.httpClient.get<Inscription[]>(this.uri_getInscriptionByUsername,{headers:new HttpHeaders({'Authorization':this.jwt})
    });

  }




  // GET by ID 
  public getInscriptionById(idInscription:number){
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }
    
    let headers=new HttpHeaders();
    headers.append('authorization',this.jwt);
    return  this.httpClient.get<Inscription>("http://localhost:8080/Inscription/getInscriptionById/"+idInscription,{headers:new HttpHeaders({'Authorization':this.jwt})
    });

  }
  // PUT by ID 
  public updateInscription(inscription:Inscription,idInscription:number,idp:number){
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }
    
    let headers=new HttpHeaders();
    headers.append('authorization',this.jwt);
    return  this.httpClient.put("http://localhost:8080/Inscription/modifierInscription/"+idInscription+"/"+idp,inscription,{headers:new HttpHeaders({'Authorization':this.jwt})
    });

  }



}
