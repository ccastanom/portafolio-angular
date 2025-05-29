import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';


/* Componente standalone que muestra habilidades y su nivel de dominio, utiliza barra de progreso de PrimeNG para representar visualmente el avance
*/

@Component({
  selector: 'app-what-i-do',
  standalone: true,
  imports: [CommonModule, ProgressBarModule],
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.scss']
})
export class WhatIDoComponent {
/* Variable para controlar la habilidad seleccionada, la utilizo para resaltar la tarjeta seleccionada y mostrar su porcentaje */

  habilidadSeleccionada: any = null;

  seleccionarHabilidad(skill: any) {
    this.habilidadSeleccionada = skill;
  }

/* Arreglo de habilidades tecnológicas, cada objeto contiene nombre, icono, nivel textual y porcentaje de dominio*/

  habilidades = [
    { nombre: 'C++', icono: 'assets/icons/c++.png', nivel: 'Intermedio', porcentaje: 60 },
    { nombre: 'HTML', icono: 'assets/icons/html.png', nivel: 'Básico', porcentaje: 40 },
    { nombre: 'CSS', icono: 'assets/icons/css.png', nivel: 'Básico', porcentaje: 40 },
    { nombre: 'JavaScript', icono: 'assets/icons/javascript.png', nivel: 'En progreso', porcentaje: 30 },
    { nombre: 'Angular', icono: 'assets/icons/angular.png', nivel: 'En formación', porcentaje: 30 },
    { nombre: 'Python', icono: 'assets/icons/python.jpg', nivel: 'Avanzado', porcentaje: 75 },
    { nombre: 'Node.js', icono: 'assets/icons/nodejs.png', nivel: 'Explorando', porcentaje: 30 },
    { nombre: 'SQL', icono: 'assets/icons/sql.png', nivel: 'Básico', porcentaje: 40 }
  ];
}



