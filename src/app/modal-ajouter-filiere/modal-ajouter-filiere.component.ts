import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Filiere } from '../com.project.frontEnd.model/Filiere';
import { AuthenticationService } from '../service/AuthenticationService';
import { FiliereService } from '../service/FiliereService';

@Component({
  selector: 'app-modal-ajouter-filiere',
  templateUrl: './modal-ajouter-filiere.component.html',
  styleUrls: ['./modal-ajouter-filiere.component.css']
})
export class ModalAjouterFiliereComponent implements OnInit {
  
  filiere: Filiere=new Filiere();
  page:number=1;
   size:number=9;
   totalItems:any;
  
  constructor(private filiereservice: FiliereService,
    private auth:AuthenticationService,private http:HttpClient,private router:Router,
    public dialogRef: MatDialogRef<ModalAjouterFiliereComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
  }


  //THE PERSIST OF ONE OBJECT FILIERE
  onSubmit(form:NgForm){

    this.filiere.libelle=form.value['libelle'];
const d = new Date(form.value['dateCreation']);
d.setMinutes(d.getDay() +1);
this.filiere.dateCreation=d;

    this.saveFiliere(this.filiere);
    

  }

  public saveFiliere(filiere:Filiere){
    this.filiereservice.saveFiliere(filiere).subscribe(
      (data) => {
        console.log('Enregistrement terminé !');
        this.onNoClick();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
    //this.router.navigateByUrl('Home');
    //this.router.navigateByUrl('Filiere');
  }

  onNoClick(): void {
    this.dialogRef.close();
  
  }

  public getTotalFields(){
    this.filiereservice.CountFiliere().subscribe(
      (data)=>{
        this.totalItems=data;
        console.log(this.totalItems);
      },(error)=>{}
    );
  }

  


}
