import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Inscription } from '../com.project.frontEnd.model/Inscription';
import { ModalUpdatePaiementComponent } from '../modal-update-paiement/modal-update-paiement.component';
import { InscriptionService } from '../service/InscriptionService';

@Component({
  selector: 'app-consulter-etudiant',
  templateUrl: './consulter-etudiant.component.html',
  styleUrls: ['./consulter-etudiant.component.css']
})
export class ConsulterEtudiantComponent implements OnInit {

 //NgModel
   username:string;
 public listeInscription: Array<Inscription>=[];
 public inscriptionToFind:Inscription;


 constructor(private inscriptionService:InscriptionService,public dialog: MatDialog) { }

  ngOnInit() {
  }



  getInscrptionByUserName(){

    this.inscriptionService.getInscriptionEtudiantByUsername(this.username).subscribe(
      (data)=>{
        this.listeInscription=data;
        console.log(data)
      }, (error)=>{
         console.log(error);}
  
    );
  }





  updateInscription(idInscription)
{
 this.inscriptionService.getInscriptionById(idInscription).subscribe(
(data)=>{

  this.inscriptionToFind=new Inscription();
  this.inscriptionToFind=data;
  let dialogRef = this.dialog.open(ModalUpdatePaiementComponent, {
    width: '900px',height:'400px',
    data:  this.inscriptionToFind
    
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    //this.loadPage(1);
  });


},
(error)=>{
  console.log(error);
}
 );

}


















}
