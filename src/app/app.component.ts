import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name!: string;
  title = 'reto01';
  cities = ['Barcelona', 'Madrid', 'Valledupar'];
  selection!: string;

  // En este metodo se recibe finalmente el valor que viene desde el hijo para poder
  // pushearlo al Array de cities
  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityClicked(city: string): void {
    // console.log('Ciudad ->', city);
    // Para setear el valor de la propiedad que queremos usamos el:
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

  onSearch(): void {
    console.log('onSearch');
  }
}
