import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Filiere } from '../com.project.frontEnd.model/Filiere';
import { Niveau } from '../com.project.frontEnd.model/Niveau';
import { FiliereService } from '../service/FiliereService';
import { NiveauService } from '../service/NiveauService';

@Component({
  selector: 'app-modal-ajouter-niveau',
  templateUrl: './modal-ajouter-niveau.component.html',
  styleUrls: ['./modal-ajouter-niveau.component.css']
})
export class ModalAjouterNiveauComponent implements OnInit {

  listeFiliere: Array<Filiere> = [];
  constructor(public dialogRef: MatDialogRef<ModalAjouterNiveauComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private filiereservice: FiliereService,private niveauService: NiveauService) { }

  ngOnInit() {
    this.getAllFiliere();
     
  }

  onSubmit(form:NgForm){


    let niveau:Niveau=new Niveau();
    niveau.libelle=form.value['libelle'];
    niveau.filiere.codeFiliere=Number(form.value['codeFiliere']);
    this.saveNiveau(niveau);
       
  }


  public saveNiveau(niveau:Niveau) {

    this.niveauService.saveNiveau(niveau).subscribe(
      (data) => {
        console.log('Enregistrement terminé !');
        this.onNoClick();



      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  
  }

  getAllFiliere() {
    this.filiereservice.getAllFiliereWithoutpagination().subscribe(
      (data) => {
        //this.getTotalFields();
        this.listeFiliere = data;

        console.log(this.listeFiliere);
      },
      (error) => {
      });
 
 
    }

    onNoClick(): void {
      this.dialogRef.close();
    
    }



    







}
