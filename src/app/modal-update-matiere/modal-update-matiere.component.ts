import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Matiere } from '../com.project.frontEnd.model/Matiere';
import { MatiereService } from '../service/MatiereService';

@Component({
  selector: 'app-modal-update-matiere',
  templateUrl: './modal-update-matiere.component.html',
  styleUrls: ['./modal-update-matiere.component.css']
})
export class ModalUpdateMatiereComponent implements OnInit {

matiere:Matiere;

  constructor(public dialogRef: MatDialogRef<ModalUpdateMatiereComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private matiereService:MatiereService) { }
  


  ngOnInit() {
    this.matiere=new Matiere();
    this.matiere=this.data;
    console.log(this.matiere);
  }


  onSubmit(f:NgForm) {

    this.matiere.libelle=f.value['libelle'];
    this.matiere.coeffitien=f.value['coeffitien'];
    this.updateFiliere(this.matiere,this.matiere.idMatiere);


  }

  public updateFiliere(matiere:Matiere,id:number){
    this.matiereService.updateMatiere(matiere,id).subscribe(
      () => {
        console.log('Enregistrement terminé !');
        this.dialogRef.close();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
   
  }
}
