import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { WeatherReportComponent } from '@components/weather-report/weather-report.component';
import { CityWeatherReportComponent } from '@components/city-weather-report/city-weather-report.component';

//intercepto
import { OpenWeatherInterceptor } from '@interceptors/open-weather.interceptor';
import { WeatherThemeDirective } from '@directives/weather-theme.directive';
import { ReportForecastComponent } from '@components/city-weather-report/report-forecast/report-forecast.component';
import { ForecastItemComponent } from '@components/city-weather-report/forecast-item/forecast-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent,
    CityWeatherReportComponent,
    WeatherThemeDirective,
    ReportForecastComponent,
    ForecastItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: OpenWeatherInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
