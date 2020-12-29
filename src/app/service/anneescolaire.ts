import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
import {AnneeScolaire} from '../com.project.frontEnd.model/AnneeScolaire';
import {Etudiant} from "../com.project.frontEnd.model/Etudiant";
import {Filiere} from "../com.project.frontEnd.model/Filiere";
import {AuthenticationService} from "./AuthenticationService";
//import {map} from 'rxjs/add/operator';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class anneescolaire {

  private jwt:any;

  constructor(private http:HttpClient,private auth:AuthenticationService) {}

 uri_api_getAll:string="http://localhost:8080/anneeScolaire/getAll";
  private uriApi_create="http://localhost:8080/AnneeScolaire/create";
  private uriApi_update="http://localhost:8080/AnneeScolaire/modifierAnneeScolaire/";


  // GET ALL YEARS ON LIST
  getAllYears() {

    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }

    return this.http.get<AnneeScolaire[]>("http://localhost:8080/AnneeScolaire/getAll",
      {headers: new HttpHeaders({'Authorization': this.jwt})});
    //.map((res:Response)=>this.convertResponse(res));
  }



  // GET year by id 
  getYearById(id:number) {

    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }

    return this.http.get<AnneeScolaire>("http://localhost:8080/AnneeScolaire/getAnneeScolaireByAnnee/"+id,
      {headers: new HttpHeaders({'Authorization': this.jwt})});
    //.map((res:Response)=>this.convertResponse(res));
  }


  //CREATE YEAR
  saveYear(year:AnneeScolaire){
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }

    let headers=new HttpHeaders();
    headers.append('authorization',this.jwt);
    return this.http.post(this.uriApi_create,year,{headers:new HttpHeaders({'Authorization':this.jwt})})
  }



  //update YEAR
  updateYear(year:AnneeScolaire,id:number){
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }

    let headers=new HttpHeaders();
    headers.append('authorization',this.jwt);
    return this.http.put(this.uriApi_update+id,year,{headers:new HttpHeaders({'Authorization':this.jwt})})
  }







}
