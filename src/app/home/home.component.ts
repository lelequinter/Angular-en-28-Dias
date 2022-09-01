import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  name!: string;
  title = 'reto01';
  cities = ['Barcelona', 'Madrid', 'Valledupar'];
  selection!: string;
  criteria = '';

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
