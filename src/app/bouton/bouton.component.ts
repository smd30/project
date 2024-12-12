import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent {
  @Output() nouveauClicked = new EventEmitter<void>(); // Émet un événement quand le bouton est cliqué

  onNouveauClick(): void {
    this.nouveauClicked.emit(); // Émet l'événement
  }
}
