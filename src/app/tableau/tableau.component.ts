import { Component, OnInit } from '@angular/core';
import { Etudiants } from '../models/etudiants.models';
import { EtudiantsService } from '../services/etudiant-serv.service';
import { FormsModule } from '@angular/forms'; // Import du FormsModule
import { CommonModule } from '@angular/common'; // Ajoutez CommonModule

@Component({
  selector: 'app-tableau',
  standalone: true, // Assurez-vous que votre composant est autonome
  imports: [FormsModule, CommonModule], // Ajoutez FormsModule et CommonModule ici
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
})
export class TableauComponent implements OnInit {
  etudiants: Etudiants[] = [];
  newEtudiant: Etudiants = { id: 0, nom: '', prenom: '', classe: '' };
  showForm: boolean = false; // Déclarez showForm pour gérer l'affichage du formulaire

  constructor(private etudiantsService: EtudiantsService) {}

  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants(): void {
    this.etudiantsService.getEtudiants().subscribe((data) => (this.etudiants = data));
  }

  addEtudiant(): void {
    this.etudiantsService.addEtudiant(this.newEtudiant);
    this.newEtudiant = { id: 0, nom: '', prenom: '', classe: '' }; // Réinitialisez l'objet après ajout
    this.loadEtudiants();
    this.toggleForm(); // Masquez le formulaire après ajout
  }

  updateEtudiant(etudiant: Etudiants): void {
    this.etudiantsService.updateEtudiant(etudiant);
    this.loadEtudiants();
  }

  deleteEtudiant(id: number): void {
    this.etudiantsService.deleteEtudiant(id);
    this.loadEtudiants();
  }

  toggleForm(): void {
    this.showForm = !this.showForm; // Basculez la visibilité du formulaire
  }
}
