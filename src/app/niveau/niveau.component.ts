import { Component, OnInit } from '@angular/core';
import {NiveauService} from '../service/NiveauService';
import {Niveau} from '../com.project.frontEnd.model/Niveau';
import {FiliereService} from '../service/FiliereService';
import {Filiere} from '../com.project.frontEnd.model/Filiere';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {stringify} from "@angular/core/src/util";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../service/AuthenticationService";
import { MatDialog } from '@angular/material';
import { ModalAjouterNiveauComponent } from '../modal-ajouter-niveau/modal-ajouter-niveau.component';
import { ModalUpdateNiveauComponent } from '../modal-update-niveau/modal-update-niveau.component';



@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {


   filiere :Filiere=new Filiere();
   niveau: Niveau=new Niveau();
   listeFiliere: Array<Filiere> = [];
   listeNiveau: Array<Niveau>=[];

  page:number=1;
  size:number=6;
  totalItems:any;
  activatePanelSaveFiliere:number=0;



     constructor(private niveauService: NiveauService, private filiereservice: FiliereService,
      private router:Router,private auth:AuthenticationService,public dialog: MatDialog) { }

  ngOnInit() {

    this.getAllNiveau(this.page-1,this.size);
    this.getAllFiliere();

  }

  getAllFiliere() {
    this.filiereservice.getAllFiliereWithoutpagination().subscribe(
      (data) => {
        this.getTotalFields();
        this.listeFiliere = data;

        console.log(this.listeFiliere);
      },
      (error) => {
      });
  }




  public deleteNiveau(idNiveau:number) {

    if( confirm("Voullez vous continuer  la suppression")==true) {
      this.niveauService.deleteiveauById(idNiveau)
        .subscribe(
          () => {
            
            this.getAllNiveau(0,6);
            alert('Données Supprimées');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );

    }
    else {
      console.log("okay God")
    }

  }

  loadPage(page:number){

    let myPage= page-1;
    this.getAllNiveau(myPage,this.size);

  }

  public onRedirect(){

    this.activatePanelSaveFiliere=0;
    this.getAllNiveau(this.page-1,this.size);
  }


  // GET ALL NIVEAY
  public getAllNiveau(page :number,size:number) {
    this.getTotalFields();
    this.niveauService.getAll(page,size).subscribe(
      (data) => {this.listeNiveau = data},
      (error)=>{console.log(error);

      }
    );
  }




  onSubmit(form:NgForm){


    let niveau:Niveau=new Niveau();
    niveau.libelle=form.value['libelle'];
    niveau.filiere.codeFiliere=Number(form.value['idFiliere']);
    console.log(niveau);

    this.saveNiveau(niveau);
    this.activatePanelSaveFiliere=1;

  }

  public saveNiveau(niveau:Niveau) {

    this.niveauService.saveNiveau(niveau).subscribe(
      () => {
        console.log('Enregistrement terminé !');



      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
    this.router.navigateByUrl('Home');
    this.router.navigateByUrl('Niveau');
  }

  public getTotalFields(){
    this.niveauService.CountLevels().subscribe(
      (data)=>{
        this.totalItems=data;
        console.log(this.totalItems);
      },(error)=>{}
    );
  }


  opendialog(): void {
    let dialogRef = this.dialog.open(ModalAjouterNiveauComponent, {
      width: '900px',height:'400px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllNiveau(0,6);
      
    });
  }   


      niveauToUpdate:Niveau;
     updateNiveau(idNiveau){
      this.niveauService.getNiveauById(idNiveau).subscribe(

        (data)=>{
          console.log(data);
          this.niveauToUpdate=new Niveau();
          this.niveauToUpdate= {... data};
         let dialogRef = this.dialog.open(ModalUpdateNiveauComponent, {
      width: '900px',height:'400px',
      data: this.niveauToUpdate
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllNiveau(0,6);
      
    });


        },

        (error) =>{
          console.log(error);
        }
      );

     }
  










}
