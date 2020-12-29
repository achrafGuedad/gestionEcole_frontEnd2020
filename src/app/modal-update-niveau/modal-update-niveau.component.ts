import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Filiere } from '../com.project.frontEnd.model/Filiere';
import { Niveau } from '../com.project.frontEnd.model/Niveau';
import { FiliereService } from '../service/FiliereService';
import { NiveauService } from '../service/NiveauService';

@Component({
  selector: 'app-modal-update-niveau',
  templateUrl: './modal-update-niveau.component.html',
  styleUrls: ['./modal-update-niveau.component.css']
})
export class ModalUpdateNiveauComponent implements OnInit {

  listeFiliere: Array<Filiere> = [];
   niveau :Niveau;

  constructor(public dialogRef: MatDialogRef<ModalUpdateNiveauComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private filiereservice: FiliereService,private niveauService: NiveauService) { }
    


  ngOnInit() {
    this.niveau=new Niveau();
    this.niveau=this.data;
    console.log(this.niveau);

    this.getAllFiliere();
  }
onSubmit(form:NgForm){


    let niveau:Niveau=new Niveau();
    niveau.libelle=form.value['libelle'];
    niveau.filiere.codeFiliere=Number(form.value['codeFiliere']);
   // this.saveNiveau(niveau);
       
  }
  onUpdate(f:NgForm){
    let niveau:Niveau=new Niveau();
    niveau.libelle=f.value['libelle'];
    niveau.filiere.codeFiliere=Number(f.value['codeFiliere']);
    console.log(niveau);
    this.niveauService.updateNiveau(niveau,this.niveau.idNiveau).subscribe(

      (data)=> {
         console.log("bien modifié ",data);
         this.dialogRef.close();
         
      },(error)=> {}
    )
  }


  getAllFiliere() {
    this.filiereservice.getAllFiliereWithoutpagination().subscribe(
      (data) => {
        //this.getTotalFields();
        this.listeFiliere = data;

        console.log(this.listeFiliere);
      },
      (error) => {
      });
  }

}
