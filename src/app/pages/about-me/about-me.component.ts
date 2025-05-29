import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

/*  Define el componente 'AboutMeComponent' como standalone (independiente del módulo principal)
  - Usa módulos necesarios como CommonModule y PrimeNG CardModule para la vista
  - Asocia el archivo HTML y el archivo SCSS correspondiente al componente
*/

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {}

