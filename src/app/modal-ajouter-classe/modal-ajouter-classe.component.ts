import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AnneeScolaire } from '../com.project.frontEnd.model/AnneeScolaire';
import { Classe } from '../com.project.frontEnd.model/Classe';
import { Niveau } from '../com.project.frontEnd.model/Niveau';
import { anneescolaire } from '../service/anneescolaire';
import { ClasseService } from '../service/ClasseService';
import { NiveauService } from '../service/NiveauService';

@Component({
  selector: 'app-modal-ajouter-classe',
  templateUrl: './modal-ajouter-classe.component.html',
  styleUrls: ['./modal-ajouter-classe.component.css']
})
export class ModalAjouterClasseComponent implements OnInit {

//PAGINATION VARIBLES
page:number=1;
size:number=5;
totalItems:any;

// data retrieve 
anneeScolaireList:Array<AnneeScolaire>=[];
public listeNiveau:Array<Niveau>=[];



  constructor(private niveauService: NiveauService,private  anneeScolaireService:anneescolaire,private classeService:ClasseService,
    public dialog: MatDialogRef <ModalAjouterClasseComponent>) { }

  ngOnInit() {

    this.getAllLevels();
    this.getAllAnneeScolaire();
  }






  // SAVE CLASSE
  saveClasse(classe:Classe) {
    this.classeService.saveClasseApi(classe).subscribe(
      (data:Classe) => {
        console.log('Enregistrement terminé !');
        this.dialog.close();
        
        //this.getAllClassesByAnnee(this.page-1,this.size);



      },
      (error) => {
        console.log('Erreur ! : ' + error);
      });
  }



// GET ALL NIVEAU ON LIST
getAllLevels(){
  this.niveauService.getAllOnList().subscribe(
    (data)=>{this.listeNiveau=data;}
    , (error)=>{console.log(error)}
  );
}



  // GET ALL ANNEE SCOLAIRE
  getAllAnneeScolaire() {
    this.anneeScolaireService.getAllYears().subscribe(
      (data) => this.anneeScolaireList = data,
      (error)=>  console.log(error)
    );
  }

  onSubmit(f:NgForm){
    let classe:Classe=new Classe();

    classe.anneeScolaire.idAnneeScolaire=Number(f.value['idAnneeScolaire']);
    classe.niveau.idNiveau=Number(f.value['idNiveau']);
    classe.libelle=f.value['libelle'];
    this.saveClasse(classe);
      //console.log(classe)

  }
















}
