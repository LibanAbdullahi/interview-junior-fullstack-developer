import { Component } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchQuery: string = '';
  cities: any[] = [];

  constructor(private cityService: CityService) {}

  searchCities() {
    this.cityService.searchCities(this.searchQuery).subscribe((data) => {
      console.log('Data received from backend:', data);
      this.cities = data.length > 0 ? data : []; // Assign data to cities or an empty array if no data received
    });
  }
}
