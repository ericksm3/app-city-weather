import { Component, Input, OnInit } from '@angular/core';
import { faThermometerEmpty, faWind, faClock, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent implements OnInit {

  @Input('icon') icon!: IconDefinition
  @Input('label') label!: any
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.icon, this.label)
  }

}
