import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { WeatherReportComponent } from '@components/weather-report/weather-report.component';
import { CityWeatherComponent } from '@components/city-weather/city-weather.component';

// intercepto
import { OpenWeatherInterceptor } from '@interceptors/open-weather.interceptor';
import { WeatherThemeDirective } from '@directives/weather-theme.directive';
import { ForecastItemComponent } from '@components/forecast-item/forecast-item.component';
import { TimezoneDatePipe } from '@pipes/timezone-date.pipe';
import { TimezoneDayPipe } from '@pipes/timezone-day.pipe';
import { CityForecastComponent } from '@components/city-forecast/city-forecast.component';
import { LoaderComponent } from '@components/loader/loader.component';
import { WeatherIconComponent } from '@components/weather-icon/weather-icon.component';
import { ForecastDetailsComponent } from '@components/forecast-details/forecast-details.component';
import { ForecastHourlyComponent } from '@components/forecast-hourly/forecast-hourly.component';
import { CelsiusPipe } from '@pipes/celsius.pipe';
import { MockComponent } from './mock/mock.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent,
    CityWeatherComponent,
    WeatherThemeDirective,
    ForecastItemComponent,
    TimezoneDatePipe,
    TimezoneDayPipe,
    CityForecastComponent,
    LoaderComponent,
    WeatherIconComponent,
    ForecastDetailsComponent,
    ForecastHourlyComponent,
    CelsiusPipe,
    MockComponent
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
