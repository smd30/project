import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Pour *ngIf et *ngFor
import { FormsModule } from '@angular/forms'; // Pour [(ngModel)]
import { Etudiants } from './models/etudiants.models';
import { EtudiantsService } from './services/etudiant-serv.service';
import { TitreComponent } from './titre/titre.component';
import { TableauComponent } from './tableau/tableau.component';
import { BoutonComponent } from './bouton/bouton.component';
//import { TitreComponent } from 'titre/titre.component'; // Correct import
//import { BoutonComponent } from './components/bouton/bouton.component'; // Correct import
//import { TableauComponent } from './components/tableau/tableau.component'; // Correct import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitreComponent,TableauComponent,BoutonComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Liste des étudiants
  etudiants: Etudiants[] = [];
  newEtudiant: Etudiants = { id: 0, nom: '', prenom: '', classe: '' };
  showForm: boolean = false; // Gérer l'affichage du formulaire

  constructor() {}

  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants(): void {
    this.etudiants = [
      { id: 1, nom: 'Diouf', prenom: 'Sokhna', classe: '3A' },
      { id: 2, nom: 'Mbaye', prenom: 'Moussa', classe: '2B' },
    ];
  }

  addEtudiant(): void {
    if (this.newEtudiant.id === 0) {
      // Ajouter un nouvel étudiant
      this.newEtudiant.id = this.etudiants.length + 1; // ID généré automatiquement
      this.etudiants.push(this.newEtudiant);
    } else {
      // Mettre à jour un étudiant existant
      this.updateEtudiant(this.newEtudiant);
    }

    this.resetForm();
  }

  updateEtudiant(etudiant: Etudiants): void {
    const index = this.etudiants.findIndex((e) => e.id === etudiant.id);
    if (index !== -1) {
      this.etudiants[index] = { ...etudiant }; // Mise à jour de l'étudiant
    }
  }

  deleteEtudiant(id: number): void {
    this.etudiants = this.etudiants.filter((etudiant) => etudiant.id !== id);
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  // Préparer le formulaire pour la modification
  editEtudiant(etudiant: Etudiants): void {
    this.newEtudiant = { ...etudiant }; // Remplir le formulaire avec les données de l'étudiant à modifier
    this.showForm = true; // Afficher le formulaire
  }

  resetForm(): void {
    this.newEtudiant = { id: 0, nom: '', prenom: '', classe: '' };
    this.showForm = false; // Masquer le formulaire après ajout ou modification
  }
}