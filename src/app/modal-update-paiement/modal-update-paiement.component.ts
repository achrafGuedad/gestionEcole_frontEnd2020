import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inscription } from '../com.project.frontEnd.model/Inscription';
import { InscriptionService } from '../service/InscriptionService';

@Component({
  selector: 'app-modal-update-paiement',
  templateUrl: './modal-update-paiement.component.html',
  styleUrls: ['./modal-update-paiement.component.css']
})
export class ModalUpdatePaiementComponent implements OnInit {

inscription:Inscription;

  constructor(public dialogRef: MatDialogRef<ModalUpdatePaiementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private inscriptionService:InscriptionService) { }

  ngOnInit() {
    this.inscription=new Inscription();
    this.inscription=this.data;
    console.log(this.inscription)
  }

  onSubmit(f:NgForm){
  
     this.inscription.paiement.septembre=f.value['septembre'];
     this.inscription.paiement.octobre=f.value['octobre'];
     this.inscription.paiement.novembre=f.value['novembre'];
     this.inscription.paiement.decembre=f.value['decembre'];
     this.inscription.paiement.janvier=f.value['janvier'];
     this.inscription.paiement.fevrier=f.value['fevrier'];
     this.inscription.paiement.mars=f.value['mars'];
     this.inscription.paiement.mai=f.value['mai'];
     this.inscription.paiement.avril=f.value['avril'];
     this.inscription.paiement.juin=f.value['juin'] ;
     this.inscription.paiement.juillet=f.value['juillet'];
     this.inscription.paiement.fraixInscription=f.value['fraixInscription']; 
      console.log(     this.inscription);
      this.inscriptionService.updateInscription(this.inscription,this.inscription.idInscription,
        this.inscription.paiement.idPaiement).subscribe(

          (data)=>{
            console.log("data saved");
            this.dialogRef.close();
          },
          (error)=>{
            console.log(error);
          }


      );


  }









}
