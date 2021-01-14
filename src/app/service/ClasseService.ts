import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Classe} from "../com.project.frontEnd.model/Classe";
import {AnneeScolaire} from "../com.project.frontEnd.model/AnneeScolaire";
import {Filiere} from "../com.project.frontEnd.model/Filiere";
import {AuthenticationService} from "./AuthenticationService";
import {ReinscriptionService} from "./ReinscriptionService";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ClasseService{

  private jwt:any;

  // API  URI
  private uri_api_getAll:string="http://localhost:8080/Classe/getAll";
  private uriGetClasseById:string;
  private uriGetClasseByAnneeScolaire:string;
  private uriApi_create:string="http://localhost:8080/Classe/create";
  private uriGetClassesByAnneeScolaire:string;
  private uriApi_getAll:string;



  constructor(private httpClient:HttpClient,private auth:AuthenticationService){}



  getAllClasses(){

    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }
    this.uriApi_getAll= "http://localhost:8080/Classe/getAll";

    return  this.httpClient.get<Classe[]>(this.uriApi_getAll,{headers:new HttpHeaders({'Authorization':this.jwt})
    });
  }



  //get curent classes

  getCurentClasses(){

    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }
  

    return  this.httpClient.get<Classe[]>("http://localhost:8080/Classe/getCurentClasses",{headers:new HttpHeaders({'Authorization':this.jwt})
    });
  }

  // GET CLASSE BY ID
  getClasseById(idClasse:number){

    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }
  

    return  this.httpClient.get<Classe>("http://localhost:8080/Classe/getClasseByIdClasse/"+idClasse,{headers:new HttpHeaders({'Authorization':this.jwt})
    });
  }

// PUT CLASSE BY ID
  public updateClasse(idClasse:number,classe:Classe){
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }

    let headers=new HttpHeaders();
    headers.append('authorization',this.jwt);
    return  this.httpClient.put("http://localhost:8080/Classe/modifieClasse/"+idClasse,classe,{headers:new HttpHeaders({'Authorization':this.jwt})});
  }

  // DELETE
deleteClasse(idClasse:number) {
  if (this.jwt == null) {
    this.jwt = this.auth.loadJWT();
  }
  
  return this.httpClient.delete("http://localhost:8080/Classe/deleteById/"+idClasse, {headers: new HttpHeaders({'Authorization': this.jwt})});
}





  public saveClasseApi(classe:Classe){
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }

    let headers=new HttpHeaders();
    headers.append('authorization',this.jwt);
    return  this.httpClient.post(this.uriApi_create,classe,{headers:new HttpHeaders({'Authorization':this.jwt})});
  }

  getAllClasseApi()  {
    return  this.httpClient.get<Classe[]>(this.uri_api_getAll,httpOptions);
  }
  getAllClasseByAnneeApi(annee:number,page:number,size:number)  {
    this.uriGetClasseByAnneeScolaire="http://localhost:8080/Classe/getClassesByAnneeScolaire/"+annee+"/"+size;
    return  this.httpClient.get<Classe[]>(this.uriGetClasseByAnneeScolaire,{headers:new HttpHeaders({'Authorization':this.jwt})});
  }
  getClasseByIdApi(idClasse:number){

    this.uriGetClasseById= "http://localhost:8080/Classe/getClasseById/"+idClasse;

    return  this.httpClient.get<Classe>(this.uriGetClasseById,httpOptions);

  }

  getClassesByAnneeScolaireApi(annee:number)  {
    this.uriGetClassesByAnneeScolaire="http://localhost:8080/Classe/getClassesByAnneeScolaire/"+annee;
    return  this.httpClient.get<Classe[]>(this.uriGetClassesByAnneeScolaire,httpOptions);
  }


  getAllClassesByYear(annee:number,page:number,size:number) {

    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }

    return this.httpClient.get<Classe[]>("http://localhost:8080/Classe/getClassesByAnneeScolaire/"+annee+"/"+page+"/"+size,
      {headers: new HttpHeaders({'Authorization': this.jwt})});
    //.map((res:Response)=>this.convertResponse(res));
  }


  getTotalFieldsOfClasse(idYear:number){

    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }

    return this.httpClient.get("http://localhost:8080/Classe/getTotalFields/"+idYear,
      {headers: new HttpHeaders({'Authorization': this.jwt})});
    //.map((res:Response)=>this.convertResponse(res));
  }



  getClassesByAnneeScolaire(annee:string)  {
    
    if (this.jwt == null) {
      this.jwt = this.auth.loadJWT();
    }
    return  this.httpClient.get<Classe[]>("http://localhost:8080/Classe/getClassesByAnneeScolaire/"+annee,
    {headers: new HttpHeaders({'Authorization': this.jwt})});
  }



}
