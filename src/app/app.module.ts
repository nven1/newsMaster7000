import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ManageSiteComponent } from './manage-site/manage-site.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { WebpageComponent } from './webpage/webpage.component';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import { WizardComponent } from './wizard/wizard.component';
import { ContentComponent } from './content/content.component';
import { DesignComponent } from './design/design.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageSiteComponent,
    PageLayoutComponent,
    StatisticsComponent,
    WebpageComponent,
    DashboardNavigationComponent,
    WizardComponent,
    ContentComponent,
    DesignComponent
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
