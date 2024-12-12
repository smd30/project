import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule
import { provideHttpClient } from '@angular/common/http'; // Fournir HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Ajouter le fournisseur HttpClient
  ],
});
