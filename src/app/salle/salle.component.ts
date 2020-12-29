import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Salle } from '../com.project.frontEnd.model/Salle';
import { ModalAjouterSalleComponent } from '../modal-ajouter-salle/modal-ajouter-salle.component';
import { ModalUpdateSalleComponent } from '../modal-update-salle/modal-update-salle.component';
import { SalleService } from '../service/SalleService';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
//PAGINATION VARIBLES
page:number=1;
size:number=8;
totalItems:any;

listeSalle:Array<Salle>=[];


  constructor(public dialog: MatDialog,private salleService:SalleService) { }

  ngOnInit() {

    this.getAllSalle(this.page-1 );
  }


//LoadPage
public loadPage(page:number){
  let myPage= page-1;
  this.getAllSalle(myPage);
}


// GET ALL SALLE
public getAllSalle(page:number) {
  this.getTotalFields();
  this.salleService.getAllSalle(page,this.size).subscribe(
    (data) => {this.listeSalle = data},
    (error)=>{console.log(error);

    }
  );
}
// GET TOTAL FIELDS
 public getTotalFields(){
  this.salleService.CountSalle().subscribe(
    (data)=>{
      this.totalItems=data;
      console.log('total Matiere '+this.totalItems);
    },(error)=>{console.log(error)}
  );
} 

   // POST
  addSalle() {
    let dialogRef = this.dialog.open(ModalAjouterSalleComponent, {
      width: '900px',height:'400px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllSalle(0);
      
    });
  }

salle:Salle;
//PUT 
updateSalle(idSalle){
this.salleService.getSalleById(idSalle).subscribe(

  (data)=>{
    this.salle=new Salle();
    this.salle=data;
    let dialogRef = this.dialog.open(ModalUpdateSalleComponent, {
      width: '900px',height:'400px',
      data:  this.salle
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    this.loadPage(1);      
    });

  }, (error)=>{  console.log(error)}
);

}

// DELETE
deletesalle(idSalle){
  if (confirm('Voullez  vous continuer la suppression') == true) {
    this.salleService.deleteSalle(idSalle).subscribe(
      (data) => {
        console.log('Suppression  terminée !');
        let page=1;
        this.getAllSalle(page -1);
        alert('Données Supprimées');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
  else {
    console.log('xoxox');
  }

}



}
