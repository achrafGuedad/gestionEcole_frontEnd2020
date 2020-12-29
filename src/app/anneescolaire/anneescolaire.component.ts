import { Component, Injectable, OnInit } from '@angular/core';
import {AnneeScolaire} from '../com.project.frontEnd.model/AnneeScolaire';
import {anneescolaire} from '../service/anneescolaire';
import {Observable} from 'rxjs/Rx';
import {FormBuilder, FormGroup, FormArray, FormControl, NgForm} from '@angular/forms';
import {FiliereService} from '../service/FiliereService';
import {Filiere} from '../com.project.frontEnd.model/Filiere';
import {ClasseService} from "../service/ClasseService";
import {Classe} from "../com.project.frontEnd.model/Classe";
import {Router} from "@angular/router";
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FiliereComponent } from '../filiere/filiere.component';
import {MatDialog} from '@angular/material/Dialog';
import { FormAnneeScolaireComponent } from '../form-annee-scolaire/form-annee-scolaire.component';
import { FormUpdateAnneeScolaireComponent } from '../form-update-annee-scolaire/form-update-annee-scolaire.component';

@Component({
  selector: 'app-anneescolaire',
  templateUrl: './anneescolaire.component.html',
  styleUrls: ['./anneescolaire.component.css']
})

export class AnneescolaireComponent implements OnInit {


  // PAGINATION VARIABLE

  page:number=1;
  size:number=5;
  totalItems:any;
  activatePanelSave:number=0;

   //DATA RETRIEVED
   public listeYears: Array<AnneeScolaire>=[];
   public listeClasses: Array<Classe>=[];

  //NgModel
  public idanneeScolaire:number;

  public anneeScolaireToFind:AnneeScolaire;
  
  constructor(private ass: anneescolaire,private router:Router,private classeService: ClasseService,
    public dialog: MatDialog) {

  }

  

  ngOnInit() {
    this.getAllYears();

  }

  //Get year by id year
  public getAnneeScolaireById() {
    this.ass.getYearById(this.idanneeScolaire).subscribe(
      (data) => {
        this.anneeScolaireToFind=new AnneeScolaire();
        this.anneeScolaireToFind = data;
        console.log("anneeToFind ", typeof  (this.anneeScolaireToFind))
        console.log(" data-------  ",  data);
        console.log("zz",this.anneeScolaireToFind);
        let dialogRef = this.dialog.open(FormUpdateAnneeScolaireComponent, {
          width: '900px',height:'400px',
          data: this.anneeScolaireToFind  
        });


      }, (error) => {
        console.log(error);
      }
    );

    

  }

  //Get Total Year USED IN LIST BOX ABOVE
  public getAllYears() {

    this.ass.getAllYears().subscribe(
      (data) => {
        this.listeYears = data;


      }, (error) => {
        console.log(error);
      }
    );

  }

  // GET ALL CLASSES BY YEAR
    public loadClasses(anneeScolaire,page,size) {
      page=this.page-1;
      size=this.size;
     this.classeService.getAllClassesByYear(anneeScolaire,page,size).subscribe(

       (data)=>{
             this.getTotalFields();
             this.listeClasses=data;

       },
       (error)=>{
         console.log(error)

       }
     );

    }


  // COUNT CLASSES FIELDS
  public getTotalFields(){

    this.classeService.getTotalFieldsOfClasse(this.idanneeScolaire).subscribe(

      (data)=>{
        this.totalItems=data;
        console.log(this.totalItems);

      },(error)=>{
        console.log(error);
      }
    );
  }


    //On SUBMIT
  public onSubmit(form:NgForm) {

    let year: AnneeScolaire = new AnneeScolaire();
    year.anneeScolaire = form.value['year'];
    year.dateDebutSemestre_1 = form.value['dateDebutS_1'];
    year.dateFinSemestre_1 = form.value['dateFinS_1'];
    year.dateDebutSemestre_2 = form.value['dateDebutS_2'];
    year.dateFinSemestre_2 = form.value['dateFinS_2'];
    this.saveYear(year);
    //console.log(year);
    this.activatePanelSave=1;
    form.resetForm();


  }

  //LOAD PAGE
  public loadPage(page){}


  public hidenPanelSave(){
    this.activatePanelSave=0;

  }

  public saveYear(year:AnneeScolaire){
   this.ass.saveYear(year).subscribe(

     (data)=>{
       console.log('bien bien');
       this.getAllYears();
     },
     (error)=>{console.log(error)}
   );

   
  }



  
  openDialog(): void {
    let dialogRef = this.dialog.open(FormAnneeScolaireComponent, {
      width: '900px',height:'400px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllYears();
      
    });
  }

  openDialogForUpdate(idanneeScolaire) {

  
    // this.anneeScolaireToFind  =new AnneeScolaire();
     this.getAnneeScolaireById();   
    //console.log(this.anneeScolaireToFind);
     /* let dialogRef = this.dialog.open(FormUpdateAnneeScolaireComponent, {
      width: '900px',height:'400px',
      data: this.anneeScolaireToFind  
    }); 

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllYears();
      console.log(this.anneeScolaireToFind);
      
    }); */
  }













  }













