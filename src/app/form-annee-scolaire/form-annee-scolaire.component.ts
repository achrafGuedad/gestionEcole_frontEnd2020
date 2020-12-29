import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/Dialog';
import { Router } from '@angular/router';
import { AnneescolaireComponent } from '../anneescolaire/anneescolaire.component';
import { AnneeScolaire } from '../com.project.frontEnd.model/AnneeScolaire';
import { anneescolaire } from '../service/anneescolaire';

@Component({
  selector: 'app-form-annee-scolaire',
  templateUrl: './form-annee-scolaire.component.html',
  styleUrls: ['./form-annee-scolaire.component.css']
})
export class FormAnneeScolaireComponent implements OnInit {

  public listeYears: Array<AnneeScolaire>=[];
  public anneescolaireComponent:AnneescolaireComponent;
  
  constructor(
    public dialogRef: MatDialogRef<FormAnneeScolaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private ass:anneescolaire,private router:Router,
) { }

  onNoClick(): void {
    this.dialogRef.close();
  
  }
  ngOnInit() {
  }

  //On SUBMIT
  public onSubmit(form:NgForm ) {

    let year: AnneeScolaire = new AnneeScolaire();
    year.anneeScolaire = form.value['year'];
    year.dateDebutSemestre_1 = form.value['dateDebutS_1'];
    year.dateFinSemestre_1 = form.value['dateFinS_1'];
    year.dateDebutSemestre_2 = form.value['dateDebutS_2'];
    year.dateFinSemestre_2 = form.value['dateFinS_2'];
    this.saveYear(year);
    //console.log(year);
    //this.activatePanelSave=1;
    form.resetForm();


  }

  public saveYear(year:AnneeScolaire){
    this.ass.saveYear(year).subscribe(
 
      (data)=>{
        console.log('bien bien');
        this.onNoClick();
        //this.router.navigateByUrl('AnneeScolaire');

      },
      (error)=>{console.log(error)}
    );
}
















}