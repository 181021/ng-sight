import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {appRoutes} from '../routes';
import { NgModule } from '@angular/core';
import {ChartsModule} from 'ng2-charts';

import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './Sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './Sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './Sections/section-health/section-health.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
