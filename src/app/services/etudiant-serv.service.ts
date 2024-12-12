// etudiant-serv.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiants } from '../models/etudiants.models'; // Assure-toi que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  private apiUrl = 'http://localhost:3000';  // Remplace par l'URL de ton API

  constructor(private http: HttpClient) {}

  getEtudiants(): Observable<Etudiants[]> {
    return this.http.get<Etudiants[]>(`${this.apiUrl}/etudiants`);
  }

  addEtudiant(etudiant: Etudiants): Observable<Etudiants> {
    return this.http.post<Etudiants>(`${this.apiUrl}/etudiants`, etudiant);
  }

  updateEtudiant(etudiant: Etudiants): Observable<Etudiants> {
    return this.http.put<Etudiants>(`${this.apiUrl}/etudiants/${etudiant.id}`, etudiant);
  }

  deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/etudiants/${id}`);
  }
}
