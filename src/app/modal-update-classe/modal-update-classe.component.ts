import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Classe } from '../com.project.frontEnd.model/Classe';
import { Niveau } from '../com.project.frontEnd.model/Niveau';
import { ClasseService } from '../service/ClasseService';
import { NiveauService } from '../service/NiveauService';

@Component({
  selector: 'app-modal-update-classe',
  templateUrl: './modal-update-classe.component.html',
  styleUrls: ['./modal-update-classe.component.css']
})
export class ModalUpdateClasseComponent implements OnInit {

 classe :Classe;
 public listeNiveau:Array<Niveau>=[];

  constructor(public dialogRef: MatDialogRef<ModalUpdateClasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private classeService:ClasseService,private niveauService:NiveauService) { }



  ngOnInit() {
    this.classe=new Classe();
    this.classe=this.data;
    console.log(this.classe);
    this.getAllLevels();
  }
  onSubmit(f:NgForm){

 this.classe.libelle=f.value['libelle'];
 this.classe.niveau.idNiveau=f.value['idNiveau'];
 console.log(this.classe);
 this.classeService.updateClasse(this.classe.idClasse,this.classe).subscribe(


  (data)=>{
    console.log("bien modifie");
    this.dialogRef.close();
  }, 
  (error)=>{console.log(error)}
 );
 


  }


// GET ALL NIVEAU ON LIST
getAllLevels(){
  this.niveauService.getAllOnList().subscribe(
    (data)=>{this.listeNiveau=data;}
    , (error)=>{console.log(error)}
  );
}












}
