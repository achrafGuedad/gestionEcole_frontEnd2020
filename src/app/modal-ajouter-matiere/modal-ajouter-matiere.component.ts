import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Matiere } from '../com.project.frontEnd.model/Matiere';
import { MatiereService } from '../service/MatiereService';

@Component({
  selector: 'app-modal-ajouter-matiere',
  templateUrl: './modal-ajouter-matiere.component.html',
  styleUrls: ['./modal-ajouter-matiere.component.css']
})
export class ModalAjouterMatiereComponent implements OnInit {
    
   public id_Niveau:number;

  constructor(public dialogRef: MatDialogRef<ModalAjouterMatiereComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private matiereService:MatiereService) { }

  ngOnInit() {
   this.id_Niveau=this.data.idNiveau
  
  }


  // SAVE MATIERE
  public saveMatiere(matiere:Matiere){
    this.matiereService.saveMatiereApi(matiere).subscribe(
      (data)=>{
        console.log('good');
        this.dialogRef.close();

      },(error)=>{
        console.log('not good');
      }

    );
    
  }


  public onSubmit(form:NgForm){
    let  matiere:Matiere=new  Matiere();
    matiere.libelle=form.value['libelle'];
    matiere.coeffitien=Number(form.value['coeficient']);
    matiere.niveau.idNiveau=this.id_Niveau;
    console.log(matiere);
    this.saveMatiere(matiere);
   }






}
