import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
