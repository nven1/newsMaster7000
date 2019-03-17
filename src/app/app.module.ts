import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageSiteComponent } from './manage-site/manage-site.component';
import { ArticlesManagerComponent } from './articles-manager/articles-manager.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { WebpageComponent } from './webpage/webpage.component';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageSiteComponent,
    ArticlesManagerComponent,
    PageLayoutComponent,
    StatisticsComponent,
    WebpageComponent,
    DashboardNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
