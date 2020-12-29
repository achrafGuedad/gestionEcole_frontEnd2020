import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {anneescolaire} from './service/anneescolaire';
import { AnneescolaireComponent } from './anneescolaire/anneescolaire.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FiliereComponent } from './filiere/filiere.component';
import {FiliereService} from './service/FiliereService';
import { NiveauComponent } from './niveau/niveau.component';
import {NiveauService} from './service/NiveauService';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import {MatiereService} from "./service/MatiereService";
import {ClasseService} from "./service/ClasseService";
import { EtudiantComponent } from './etudiant/etudiant.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {EtudiantService} from "./service/EtudiantService";
import {InscriptionService} from "./service/InscriptionService";
import { AbsenceComponent } from './absence/absence.component';
import { PlaningComponent } from './planing/planing.component';
import {AbsenceService} from "./service/AbsenceService";
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./service/AuthenticationService";
import { EspaceetudiantComponent } from './espaceetudiant/espaceetudiant.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {AuthGuardService, AuthGuardService as AuthGuard} from "./service/AuthGuardService";
import { PanelComponent } from './panel/panel.component';

import {Http, HttpModule} from "@angular/http";
import { AdministrationComponent } from './administration/administration.component';
import {AdministrationService} from "./service/AdministrationService";
import { ReinscriptionComponent } from './reinscription/reinscription.component';
import {ReinscriptionService} from "./service/ReinscriptionService";
import { CreatePlaningComponent } from './create-planing/create-planing.component';
import {CreatePlaningService} from "./service/CreatePlaningService";
import { ShowPlaningComponent } from './show-planing/show-planing.component';
import { PlanStudentComponent } from './plan-student/plan-student.component';
import { ControleComponent } from './controle/controle.component';
import {ControleService} from "./service/ControleService";
import { NoteSdutentComponent } from './note-sdutent/note-sdutent.component';
import {noteStudentService} from "./service/noteStudentService";
import { AbsenceStudentComponent } from './absence-student/absence-student.component';
import { DemanderPapierComponent } from './demander-papier/demander-papier.component';
import {PapierService} from "./service/PapierService";
import { ConsulterDemandeComponent } from './consulter-demande/consulter-demande.component';
import { ConsulterDemandesStudentComponent } from './consulter-demandes-student/consulter-demandes-student.component';
import {NgbAlertConfig, NgbModule, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/Input';
import {MatCardModule} from '@angular/material/card';
import { FormAnneeScolaireComponent } from './form-annee-scolaire/form-annee-scolaire.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/Dialog';
import { FormUpdateAnneeScolaireComponent } from './form-update-annee-scolaire/form-update-annee-scolaire.component';
import { ModalAjouterFiliereComponent } from './modal-ajouter-filiere/modal-ajouter-filiere.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { ModalUpdateFiliereComponent } from './modal-update-filiere/modal-update-filiere.component';
import { ModalAjouterNiveauComponent } from './modal-ajouter-niveau/modal-ajouter-niveau.component';
import { ModalUpdateNiveauComponent } from './modal-update-niveau/modal-update-niveau.component';
import { SalleComponent } from './salle/salle.component';
import { ModalAjouterMatiereComponent } from './modal-ajouter-matiere/modal-ajouter-matiere.component';
import { ModalUpdateMatiereComponent } from './modal-update-matiere/modal-update-matiere.component';
import { ModalAjouterUserComponent } from './modal-ajouter-user/modal-ajouter-user.component';
import { ModalUpdateUserComponent } from './modal-update-user/modal-update-user.component';
import { ModalAjouterSalleComponent } from './modal-ajouter-salle/modal-ajouter-salle.component';
import { SalleService } from './service/SalleService';
import { ModalUpdateSalleComponent } from './modal-update-salle/modal-update-salle.component';



export const MY_FORMATS = {
  parse: {
      dateInput: 'LL'
  },
  display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY'
  }
};


const appRoutes: Routes= [

    { path: 'AnneeScolaire' , component: AnneescolaireComponent  },
    { path: 'Filiere' , component: FiliereComponent,canActivate: [AuthGuard]  },
    { path: 'Niveau' , component: NiveauComponent ,canActivate: [AuthGuard]},
    { path: 'Matiere' , component: MatiereComponent,canActivate: [AuthGuard] },
    { path: 'Classe' , component: ClasseComponent },
    { path: 'Etudiant' , component: EtudiantComponent },
    { path: 'Absence' , component: AbsenceComponent },
    { path: 'CreatePlaning/:idClasse' , component: CreatePlaningComponent },
    { path: 'ShowPlaning/:idClasse' , component: ShowPlaningComponent },
    { path: 'Planing' , component: PlaningComponent },
    { path: 'index' , component: LoginComponent },
    { path: 'EspaceEtudiant' , component:EspaceetudiantComponent },
    { path: 'Menu' , component:MenuComponent },
    { path: 'Home' , component:HomeComponent,canActivate: [AuthGuard] },
    { path: 'Panel' , component:PanelComponent },
    { path: 'Inscription' , component:InscriptionComponent },
    { path: 'Reinscription' , component:ReinscriptionComponent },
    { path: 'Admin' , component:AdministrationComponent,canActivate: [AuthGuard] },
    { path: 'StudentPlan' , component:PlanStudentComponent,canActivate: [AuthGuard] },
    { path: 'Controle' , component:ControleComponent,canActivate: [AuthGuard] },
    { path: 'DemanderPapier' , component:DemanderPapierComponent,canActivate: [AuthGuard] },
    { path: 'ConsulterDemandes' , component:ConsulterDemandeComponent,canActivate: [AuthGuard] },
    { path: 'ConsultationDemandes' , component:ConsulterDemandesStudentComponent,canActivate: [AuthGuard] },
    { path: 'StudentAbsence' , component:AbsenceStudentComponent

      ,canActivate: [AuthGuard] },
    { path: 'NoteStudent' , component:NoteSdutentComponent,canActivate: [AuthGuard] },
    { path: 'Salle' , component:SalleComponent,canActivate: [AuthGuard] },
    { path: '' , redirectTo: 'index', pathMatch:'full' }



];




@NgModule({
  declarations: [
    AppComponent,
    AnneescolaireComponent,
    FiliereComponent,
    NiveauComponent,
    ClasseComponent,
    MatiereComponent,
    EtudiantComponent,
    InscriptionComponent,
    AbsenceComponent,
    PlaningComponent,
    LoginComponent,
    EspaceetudiantComponent,
    HomeComponent,
    MenuComponent,
    PanelComponent,
    AdministrationComponent,
    ReinscriptionComponent,
    CreatePlaningComponent,
    ShowPlaningComponent,
    PlanStudentComponent,
    ControleComponent,
    NoteSdutentComponent,
    AbsenceStudentComponent,
    DemanderPapierComponent,
    ConsulterDemandeComponent,
    ConsulterDemandesStudentComponent,
    FormAnneeScolaireComponent,
    FormUpdateAnneeScolaireComponent,
    ModalAjouterFiliereComponent,
    ModalUpdateFiliereComponent,
    ModalAjouterNiveauComponent,
    ModalUpdateNiveauComponent,
    SalleComponent,
    ModalAjouterMatiereComponent,
    ModalUpdateMatiereComponent,
    ModalAjouterUserComponent,
    ModalUpdateUserComponent,
    ModalAjouterSalleComponent,
    ModalUpdateSalleComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule,ReactiveFormsModule,HttpModule,
    BrowserAnimationsModule,MatFormFieldModule,NgbModule,MatFormFieldModule,MatInputModule,MatCardModule,MatDialogModule,
    MatDatepickerModule,MatNativeDateModule,MomentDateModule
  ],
  providers: [anneescolaire,FiliereService,NiveauService,MatiereService,ClasseService,EtudiantService,InscriptionService,AbsenceService,
    AuthenticationService,AuthGuardService,AdministrationService,ReinscriptionService,
    CreatePlaningService,ControleService,noteStudentService,PapierService,AppComponent,NgbPaginationConfig,NgbAlertConfig,
    {provide: MatDialogRef,  useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },MatDatepickerModule,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },MomentDateModule,SalleService 
    
  ], 
  
  
  bootstrap: [AppComponent],
  entryComponents: [FormAnneeScolaireComponent,FormUpdateAnneeScolaireComponent,ModalAjouterFiliereComponent,
    ModalUpdateFiliereComponent,ModalAjouterNiveauComponent,ModalUpdateNiveauComponent,ModalAjouterMatiereComponent,
    ModalUpdateMatiereComponent,ModalAjouterUserComponent,ModalUpdateUserComponent,ModalAjouterSalleComponent,ModalUpdateSalleComponent]
})
export class AppModule { }
