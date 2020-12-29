import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Niveau } from '../com.project.frontEnd.model/Niveau';
import { User } from '../com.project.frontEnd.model/User';
import { AdministrationService } from '../service/AdministrationService';

@Component({
  selector: 'app-modal-update-user',
  templateUrl: './modal-update-user.component.html',
  styleUrls: ['./modal-update-user.component.css']
})
export class ModalUpdateUserComponent implements OnInit {

  user:User;
  constructor(public dialogRef: MatDialogRef<ModalUpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , private adminService: AdministrationService) { }

  ngOnInit() {

    this.user=new User();
    this.user=this.data
  }


  onSubmit(f:NgForm){
   
    let user :User=new User();
    user.username=f.value['username'];
    user.password=f.value['password'];
    console.log(this.user);  
    this.adminService.updateUser(user,this.user.idUser).subscribe(



      (data)=>{
        console.log("data saved");
        this.dialogRef.close();
        alert("Données supprimées");

    
    },(error)=>{console.log(error);}
    );
    
    
    

  }

}
