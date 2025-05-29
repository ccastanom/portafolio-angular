import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

/* Enlaza al HTML y SCSS correspondientes*/
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    /*propiedades del formulario: name, email y message enlazados a los campos del formulario con ngModel*/
  name: string = '';
  email: string = '';
  message: string = '';

  /* Método para enviar el mensaje: Imprime los datos en consola, muestra una alerta de confirmación*/
  sendMessage() {
    console.log('Formulario enviado:', this.name, this.email, this.message);
    alert('¡Gracias por tu mensaje! Pronto te contactaré.');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
