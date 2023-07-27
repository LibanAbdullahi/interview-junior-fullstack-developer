import { Controller, Get, Query, Res } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('cities')
export class CitiesController {
  @Get()
  searchCities(@Query('search') search: string, @Res() response): void {
    try {
      const citiesData = JSON.parse(
        readFileSync(join(__dirname, 'cities.json'), 'utf8'),
      );

      const filteredCities = citiesData.filter((city) =>
        city.cityName.toLowerCase().includes(search.toLowerCase()),
      );

      const limitedCities = filteredCities.slice(0, 5);

      response.json(limitedCities);
    } catch (error) {
      response.status(500).json({ message: 'Error reading cities data' });
    }
  }
}
