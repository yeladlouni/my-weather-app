import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weather$: Observable<Weather> = new Observable();

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  search(city: string) {
    this.weather$ = this.weatherService.search(city);
  }

}
