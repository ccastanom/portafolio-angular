import { Component } from '@angular/core';

// Importación de componentes personalizados
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { WhatIDoComponent } from './pages/what-i-do/what-i-do.component';
import { InspirationComponent } from './pages/inspiration/inspiration.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

/* Componente principal de la aplicación (AppComponent)
  - Define el punto de entrada de la app Angular
  - Declara los componentes standalone que componen la interfaz del portafolio
  - Usa un archivo de plantilla HTML (app.component.html) y estilos globales*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutMeComponent,
    WhatIDoComponent,
    InspirationComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   // Título de la aplicación (no es usado directamente en la plantilla actual)
  title = 'portafolio-ng';
}
