import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { WeatherReportComponent } from '@components/weather-report/weather-report.component';
import { CityWeatherReportComponent } from '@components/city-weather-report/city-weather-report.component';

//intercepto
import { OpenWeatherInterceptor } from './interceptors/open-weather.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent,
    CityWeatherReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: OpenWeatherInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
