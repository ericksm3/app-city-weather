import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-hourly',
  templateUrl: './forecast-hourly.component.html',
  styleUrls: ['./forecast-hourly.component.scss']
})
export class ForecastHourlyComponent implements OnInit {

  @Input('hours') hours!: any;
  @Input('timezone') timezone!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
