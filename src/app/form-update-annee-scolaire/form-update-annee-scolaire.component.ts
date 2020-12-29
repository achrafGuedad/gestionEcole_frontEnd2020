import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/Dialog';
import { Router } from '@angular/router';
import { AnneeScolaire } from '../com.project.frontEnd.model/AnneeScolaire';
import { anneescolaire } from '../service/anneescolaire';

@Component({
  selector: 'app-form-update-annee-scolaire',
  templateUrl: './form-update-annee-scolaire.component.html',
  styleUrls: ['./form-update-annee-scolaire.component.css']
})
export class FormUpdateAnneeScolaireComponent implements OnInit {

  anneeScolaireToUpdate: AnneeScolaire;
  constructor(
    public dialogRef: MatDialogRef<FormUpdateAnneeScolaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AnneeScolaire,private ass:anneescolaire,private router:Router,
) { }


  ngOnInit() {
    this.anneeScolaireToUpdate=new AnneeScolaire();
    this.anneeScolaireToUpdate=this.data;
    console.log(this.anneeScolaireToUpdate)

  }


  onSubmit(form:NgForm){
   this.anneeScolaireToUpdate.anneeScolaire=form.value['year'];
   this.anneeScolaireToUpdate.dateDebutSemestre_1=form.value['dateDebutS_1'];
   this.anneeScolaireToUpdate.dateFinSemestre_1=form.value['dateFinS_1'];
   this.anneeScolaireToUpdate.dateDebutSemestre_2=form.value['dateDebutS_2'];
   this.anneeScolaireToUpdate.dateFinSemestre_2=form.value['dateFinS_2'];
     

    this.updateAnneeScolaire(this.anneeScolaireToUpdate,this.anneeScolaireToUpdate.idAnneeScolaire);
    

  }

  public updateAnneeScolaire(annescolaire:AnneeScolaire,id:number){
    this.ass.updateYear(annescolaire,id).subscribe(
      (data) => {
        console.log('Enregistrement terminé !');
        this.dialogRef.close();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
   
  }
}
