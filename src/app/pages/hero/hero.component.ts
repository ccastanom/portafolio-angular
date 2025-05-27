import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TooltipModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  words = ['Desarrolladora', 'Exploradora', 'Aprendiz'];
  currentWordIndex = 0;
  currentWord = this.words[0];

  ngOnInit(): void {
    setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.currentWordIndex];
    }, 2000); // Cambia cada 2 segundos
  }

  onChat() {
    // Redirige a sección de contacto o WhatsApp
    window.open('https://wa.me/573107715736', '_blank'); // Mi número de WhatsApp
  }
  
}

