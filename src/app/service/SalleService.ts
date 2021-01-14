import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Salle } from "../com.project.frontEnd.model/Salle";
import { AuthenticationService } from "./AuthenticationService";






@Injectable()
export class  SalleService {

  // VARIABLES
  jwt:any;


  // API
  private uri_Api:string="http://localhost:8080/Salle/";

  constructor (private httpClient: HttpClient,private auth:AuthenticationService) {}

    
    
    //SAVE A NEW Salle

  public saveMatiereApi(salle:Salle){
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }

    let headers=new HttpHeaders();
    headers.append('authorization',this.jwt);
    return  this.httpClient.post(this.uri_Api+"create",salle,{headers: new HttpHeaders({'Authorization': this.jwt})} );

  }

  // GET All  Salle 

  public getAllSalle(page :number,size:number){

    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }
  return this.httpClient.get<Salle[]>( this.uri_Api+"getAllSalle/"+page+"/"+size,{headers: new HttpHeaders({'Authorization': this.jwt})});

}

// GET All  Salle 

public getSalleById(idSalle:number){

  if (this.jwt == null) {
    this.jwt = this.auth.loadJWT();
  }
return this.httpClient.get<Salle>( this.uri_Api+"getSalleById/"+idSalle,{headers: new HttpHeaders({'Authorization': this.jwt})});

}

// count
CountSalle() {

  if (this.jwt == null) {
    this.jwt = this.auth.loadJWT();
  }

  return this.httpClient.get("http://localhost:8080/Salle/getTotalFields/",
    {headers: new HttpHeaders({'Authorization': this.jwt})});
  //.map((res:Response)=>this.convertResponse(res));
}


 //PUT  A NEW Salle

 public updateSAlle(salle:Salle,idSalle:number){
  if (this.jwt == null) {
    this.jwt = this.auth.loadJWT();
  }

  let headers=new HttpHeaders();
  headers.append('authorization',this.jwt);
  return  this.httpClient.put(this.uri_Api+"update/"+idSalle,salle,{headers: new HttpHeaders({'Authorization': this.jwt})} );

}

// DELETE
deleteSalle(idSalle:number) {
  if (this.jwt == null) {
    this.jwt = this.auth.loadJWT();
  }
  let uri_api="http://localhost:8080/Salle/deleteById/"+idSalle;
  return this.httpClient.delete(uri_api, {headers: new HttpHeaders({'Authorization': this.jwt})});
}


}