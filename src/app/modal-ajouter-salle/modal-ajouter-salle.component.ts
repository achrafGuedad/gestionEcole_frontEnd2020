import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Salle } from '../com.project.frontEnd.model/Salle';
import { SalleService } from '../service/SalleService';

@Component({
  selector: 'app-modal-ajouter-salle',
  templateUrl: './modal-ajouter-salle.component.html',
  styleUrls: ['./modal-ajouter-salle.component.css']
})
export class ModalAjouterSalleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalAjouterSalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private salleService:SalleService) { }

  ngOnInit() {
  }



  ajouterSalle(f:NgForm){


    let salle:Salle=new Salle();
    salle.libelle=f.value['libelle'];
    salle.localisation=f.value['localisation'];
    this.salleService.saveMatiereApi(salle).subscribe(


      (data)=>{
        console.log(" data saved");
        this.dialogRef.close();

      },
      (error)=>{console.log(error);
      }
    );


  }

}
