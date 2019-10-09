import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  {path: '', redirectTo: '/content', pathMatch: 'full' },
  {path:'content', component:ContentComponent},
  {path:'design', component:DesignComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
