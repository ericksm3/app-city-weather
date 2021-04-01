import { Component, Input, OnInit } from '@angular/core';
import { faThermometerEmpty, faWind, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { CityWeather } from '@interfaces/city-weather';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {

  faThermometerEmpty: IconDefinition = faThermometerEmpty;
  faWind: IconDefinition = faWind;
  faClock: IconDefinition = faClock;
  faCalendarAlt: IconDefinition = faCalendarAlt;

  @Input('cityWeather') cityWeather!: CityWeather;
  constructor() { }

  ngOnInit(): void {
  }

}
