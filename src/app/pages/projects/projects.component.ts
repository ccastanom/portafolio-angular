import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Gestión de Usuarios',
      description: 'App en Angular + Node.js para crear, editar y eliminar usuarios.',
      link: 'https://github.com/tuusuario/gestion-usuarios'
    },
    {
      title: 'Portafolio Web',
      description: 'Mi sitio personal hecho con Angular y PrimeNG.',
      link: 'https://github.com/tuusuario/portafolio'
    },
    {
      title: 'API de Productos',
      description: 'Backend con Express y PostgreSQL para gestión de productos.',
      link: 'https://github.com/tuusuario/api-productos'
    }
  ];
}
