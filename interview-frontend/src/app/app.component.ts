import { Component } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'interview-frontend';
  searchQuery: string = '';
  cities: any[] = [];

  constructor(private cityService: CityService) {}

  searchCities() {
    this.cityService.searchCities(this.searchQuery).subscribe((data) => {
      console.log('Data received from backend:', data);
      this.cities = data.length > 0 ? data : [];
    });
  }
}
