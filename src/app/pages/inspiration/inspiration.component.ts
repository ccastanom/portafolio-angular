import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

/* Standalone component que utiliza módulos visuales como Card, Carousel y Button de PrimeNG
  - Representa una sección visual dedicada a mostrar elementos que me inspiran */

@Component({
  selector: 'app-inspiration',
  standalone: true,
  imports: [CarouselModule, ButtonModule, CommonModule, CardModule],
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent {

  /*  Control de visualización (no implementado en el HTML actual)
    - Esta variable permitiría alternar entre vista en carrusel y mosaico, si decido utilizarlo
  */
  mostrarCarrusel = false;

    /* Arreglo de imágenes inspiradoras, cada objeto incluye la URL de la imagen y un texto que representa el significado personal
  */
  imagenes = [
    { url: 'assets/inspiration/inspiration1.jpg', texto: 'Montar bicicleta' },
    { url: 'assets/inspiration/inspiration2.jpg', texto: 'Conectar con la naturaleza' },
    { url: 'assets/inspiration/inspiration3.jpg', texto: 'Una taza de café en silencio' },
    { url: 'assets/inspiration/inspiration4.jpg', texto: 'Aprender algo nuevo cada día' },
    { url: 'assets/inspiration/inspiration5.jpg', texto: 'Resolver un reto con código' },
    { url: 'assets/inspiration/inspiration7.jpg', texto: 'Viajar con amigas' }
  ];
  
}
