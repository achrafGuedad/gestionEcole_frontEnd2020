import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Filiere } from '../com.project.frontEnd.model/Filiere';
import { AuthenticationService } from '../service/AuthenticationService';
import { FiliereService } from '../service/FiliereService';

@Component({
  selector: 'app-modal-update-filiere',
  templateUrl: './modal-update-filiere.component.html',
  styleUrls: ['./modal-update-filiere.component.css']
})
export class ModalUpdateFiliereComponent implements OnInit {
  
 filiere:Filiere=new Filiere;



  constructor(private filiereservice: FiliereService,
    private auth:AuthenticationService,private http:HttpClient,private router:Router,
    public dialogRef: MatDialogRef<ModalUpdateFiliereComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Filiere
    ) { }

  ngOnInit() {
    this.filiere=this.data;
    console.log(this.filiere)
  }

  onSubmit(form:NgForm){

    this.filiere.libelle=form.value['libelle'];
    this.filiere.dateCreation=form.value['dateCreation'];
    this.updateFiliere(this.filiere,this.filiere.codeFiliere);
    

  }

  public updateFiliere(filiere:Filiere,id:number){
    this.filiereservice.updateFiliere(filiere,id).subscribe(
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
