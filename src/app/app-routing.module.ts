import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebpageComponent } from './webpage/webpage.component';
import { ArticlesManagerComponent } from './articles-manager/articles-manager.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ManageSiteComponent } from './manage-site/manage-site.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:DashboardComponent},
  {path:'webpage', component:WebpageComponent},
  {path:'articles-manager', component:ArticlesManagerComponent},
  {path:'layout-manager', component:PageLayoutComponent},
  {path:'statistics', component:StatisticsComponent},
  {path:'site-manager', component:ManageSiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
