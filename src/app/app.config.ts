import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Configuración global de la aplicación (appConfig)
  - Define los providers utilizados a nivel raíz en el arranque de la app */

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(BrowserModule)
  ]
};
