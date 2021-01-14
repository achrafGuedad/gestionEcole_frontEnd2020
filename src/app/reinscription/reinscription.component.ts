import { Component, OnInit } from '@angular/core';
import {ReinscriptionService} from "../service/ReinscriptionService";
import {Classe} from "../com.project.frontEnd.model/Classe";
import {NgForm} from "@angular/forms";
import {Inscription} from "../com.project.frontEnd.model/Inscription";
import { anneescolaire } from '../service/anneescolaire';
import { AnneeScolaire } from '../com.project.frontEnd.model/AnneeScolaire';
import { ClasseService } from '../service/ClasseService';

@Component({
  selector: 'app-reinscription',
  templateUrl: './reinscription.component.html',
  styleUrls: ['./reinscription.component.css']
})
export class ReinscriptionComponent implements OnInit {

  // DATA RETRIEVED
  public listeClasse: Array<Classe> = [];
  public listeAnneeScolaire: Array<AnneeScolaire> = [];
  public etudiantDetail:Inscription;

  // data binding
  public activateTargets:number=1;

  //ngModel
  public anneeScolaire:string;

  

  constructor(private reinscriptionService: ReinscriptionService,private anneeScolaireServie:anneescolaire,
    private classeService:ClasseService) {
  }

  ngOnInit() {

    
    this.getAllYears();
  }


  chercher(){

    this.classeService.getClassesByAnneeScolaire(this.anneeScolaire).subscribe(
      (data) => {
        this.listeClasse = data;
        console.log(this.listeClasse)

      }, (error) => {
        console.log(error)
      }
    );
  }









// ONSUBMIT

  onSubmit(f:NgForm){

    let ins:Inscription=new Inscription();
    ins.etudiant.user.username=f.value['username'];
    ins.classe.idClasse=Number(f.value['idClasse']);
    
    ins.paiement.septembre=f.value['septembre'];
    ins.paiement.octobre=f.value['octobre'];
    ins.paiement.novembre=f.value['novembre'];
    ins.paiement.decembre=f.value['decembre'];
    ins.paiement.janvier=f.value['janvier'];
    ins.paiement.fevrier=f.value['fevrier'];
    ins.paiement.mars=f.value['mars'];
    ins.paiement.avril=f.value['avril'];
    ins.paiement.mai=f.value['mai'];
    ins.paiement.juin=f.value['juin'];
    ins.paiement.juillet=f.value['juillet'];
    ins.paiement.fraixInscription=f.value['fraixInscription'];
    //console.log(typeof ins.classe.idClasse)
    //console.log(ins)
    this.saveReinscription(ins,f.value['username']);

  }

  //SAVE RE INSCRIPTION
   public  saveReinscription(inscription:Inscription,username){
    this.reinscriptionService.saveReinscriptionApi(inscription,username).subscribe(

      (data:Inscription)=> {

       console.log("data saved")
      }, (error)=> {console.log(error)}
    );
  } 



  // get all years

  getAllYears(){

    this.anneeScolaireServie.getAllYears().subscribe(
      (data)=> {

        this.listeAnneeScolaire=data
      }, (error)=> {console.log(error)}

    );

  }







}