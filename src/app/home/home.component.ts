import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name!: string;
  title = 'reto01';
  cities: City[] = [];
  selection!: City;
  criteria = '';

  constructor(private readonly dataSVc: DataService) {}

  ngOnInit(): void {
    this.dataSVc.getCities().subscribe((cities) => {
      this.cities = [...cities];
    });
  }

  // En este metodo se recibe finalmente el valor que viene desde el hijo para poder
  // pushearlo al Array de cities
  updateCity(city: City):void{
    this.dataSVc.updateCity(city).subscribe(res => {
      const tempArr = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArr, city];
      this.onClear();
    })
  }

  addNewCity(city: string): void {
    this.dataSVc.addNewCity(city).subscribe((res) => {
      this.cities.push(res);
    });
  }

  onCitySelected(city: City): void {
    // console.log('Ciudad ->', city);
    // Para setear el valor de la propiedad que queremos usamos el:
    this.selection = city;
  }

  onCityDelete(id: string): void {
    // console.log(id);
    if (confirm('Are you sure?')) {
      this.dataSVc.deleteCity(id).subscribe(() => {
        const tempArr = this.cities.filter((city) => city._id !== id);
        this.cities = [...tempArr];
        this.onClear()
      });
    }
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: '',
    };
  }

  onSearch(): void {
    console.log('onSearch');
  }
}
