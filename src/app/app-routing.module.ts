import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherReportComponent } from '@components/weather-report/weather-report.component';
import { MockComponent } from './mock/mock.component';

const routes: Routes = [
  { path: '', component: WeatherReportComponent },
  { path: 'mock', component: MockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
