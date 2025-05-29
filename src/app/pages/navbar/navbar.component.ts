import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

/* Standalone component que utiliza Menubar de PrimeNG para construir la barra de navegación, incluye ButtonModule para posibles extensiones visuales*/

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  /* Definición del menú de navegación, se inicializa como un arreglo vacío, cada elemento del menú tiene etiqueta, ícono y comando asociado*/
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', command: () => this.scrollTo('inicio') },
      { label: 'Sobre mí', icon: 'pi pi-user', command: () => this.scrollTo('sobre-mi') },
      { label: 'Lo que hago', icon: 'pi pi-cog', command: () => this.scrollTo('lo-que-hago') },
      { label: 'Lo que me inspira', icon: 'pi pi-heart', command: () => this.scrollTo('inspiracion') },
      { label: 'Conectemos', icon: 'pi pi-envelope', command: () => this.scrollTo('contacto') }
    ];
  }

  /* Funcionalidad de desplazamiento, busca el elemento en el DOM por ID si lo encuentra, realiza scroll hacia él*/
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
