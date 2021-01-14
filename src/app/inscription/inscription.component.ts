import { Component, OnInit } from '@angular/core';
import {Inscription} from "../com.project.frontEnd.model/Inscription";
import {ResponseWrapper} from "../ResponseWrapper";
import {NgForm} from "@angular/forms";
import {ClasseService} from "../service/ClasseService";
import {Classe} from "../com.project.frontEnd.model/Classe";
import {Etudiant} from "../com.project.frontEnd.model/Etudiant";
import {InscriptionService} from "../service/InscriptionService";
import {ReinscriptionService} from "../service/ReinscriptionService";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  ngm:number;
  show(a:any){console.log(a)}


  public etudiantDetail:Inscription=new Inscription();
  public listeClasse:Array<Classe>=[];
  public activatePanelSave:number=0;

  // DATA BINDING VARIABLES
  public activateTable=0;

  constructor(private classeService:ClasseService,private inscriptionService:InscriptionService,private reIn:ReinscriptionService) { }

  ngOnInit() {
    this.getAllClasses();
  }

  //GET ALL CLASSES

  getAllClasses(){

    this.reIn.getAllClasseOnCurrentDate().subscribe(

      (data)=>{

        this.listeClasse=data;

      },
      (error)=>{
        console.log(error);
      }
    );
  }







  // CREATE ETUDIANT

/*   saveEtudiant(etudiant:Etudiant,role:string,idClasse:number){
this.inscriptionService.saveEtudiantApi(etudiant).subscribe(

      (data:Inscription)=>{
        this.etudiantDetail=data;
        console.log(this.etudiantDetail);

      },
      (error)=>{console.log(error)}
    );

  }
 */

  //  on submit
  onSubmit(f:NgForm){

    /* let etudiant:Etudiant=new Etudiant();


    let idClasse:number=Number(f.value['idClasse']);


    etudiant.nom=f.value['nom'];
    etudiant.prenom=f.value['prenom'];
    etudiant.email=f.value['email'];
    etudiant.numTel=f.value['numTel'];
    this.saveEtudiant(etudiant,"ETUDIANT",idClasse);
    this.activatePanelSave=1; */


    let inscription:Inscription=new Inscription();
    let classe:Classe=new Classe();

     inscription.etudiant.nom=f.value['nom'];
     inscription.etudiant.prenom=f.value['prenom'];
     inscription.etudiant.numTel=f.value['numTel'];
     inscription.etudiant.email=f.value['email'];


     //inscription.classe.idClasse=Number(f.value['idClasse']);
     this.classeService.getClasseById(Number(f.value['idClasse'])).subscribe(
      (data)=> {
        console.log("class found");
        classe=data;
        inscription.classe=classe;
        console.log(classe);

    },


    (error)=>{
      console.log(error)
    }


     );

     

     inscription.paiement.septembre=f.value['septembre'];
     inscription.paiement.octobre=f.value['octobre'];
     inscription.paiement.novembre=f.value['novembre'];
     inscription.paiement.decembre=f.value['decembre'];
     inscription.paiement.janvier=f.value['janvier'];
     inscription.paiement.fevrier=f.value['fevrier'];
     inscription.paiement.mars=f.value['mars'];
     inscription.paiement.mai=f.value['mai'];
     inscription.paiement.avril=f.value['avril'];
     inscription.paiement.juin=f.value['juin'] ;
     inscription.paiement.juillet=f.value['juillet'];
     inscription.paiement.fraixInscription=f.value['fraixInscription'];  
     
      this.inscriptionService.saveEtudiantApi(inscription,f.value['idClasse']).subscribe(
        (data)=> {
            console.log("data saved");
            alert("données enregistrées")

        },


        (error)=>{
          console.log(error)
        }


     ) ;
      
     
     //console.log(inscription);



   


  }

  closePanelSave(){
    this.activatePanelSave=0;

  }

  loadPage(){}



}
