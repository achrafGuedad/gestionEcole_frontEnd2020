import {Etudiant} from "./Etudiant";
import {Classe} from "./Classe";
import {AnneeScolaire} from "./AnneeScolaire";
import { Paiement } from "./Paiement";

export class Inscription {


  public idInscription:number;
  public etudiant:Etudiant=new  Etudiant();
  public classe:Classe=new Classe();
  public paiement:Paiement=new Paiement();


  constructor() {}

}
