import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Salle } from '../com.project.frontEnd.model/Salle';
import { SalleService } from '../service/SalleService';

@Component({
  selector: 'app-modal-update-salle',
  templateUrl: './modal-update-salle.component.html',
  styleUrls: ['./modal-update-salle.component.css']
})
export class ModalUpdateSalleComponent implements OnInit {

    salle:Salle;

  constructor(public dialogRef: MatDialogRef<ModalUpdateSalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private salleService:SalleService) { }
    

  ngOnInit() {
    this.salle=new Salle();
    this.salle=this.data;

  }


  onUpdate(f:NgForm){


    this.salle.libelle=f.value['libelle'];
    this.salle.localisation=f.value['localisation'];

    this.salleService.updateSAlle(this.salle,this.salle.idSalle).subscribe(

      (data)=>{

        console.log("bien modifié");
        this.dialogRef.close();

      },(error) =>{console.log("error")}
    )

  }

}
