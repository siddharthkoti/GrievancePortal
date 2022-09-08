import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillFormComponent } from './fill-form/fill-form.component';
import { GrievanceDetailComponent } from './grievance-detail/grievance-detail.component';
import { ViewFiledComponent } from './view-filed/view-filed.component';

const routes: Routes = [
  { path: 'file-grievance', component: FillFormComponent },
  { path: 'view-filed-grievance', component: ViewFiledComponent },
  { path: 'property-detail/:id', component: GrievanceDetailComponent },
  { path: '', redirectTo: '/file-grievance', pathMatch: 'full' },
  { path: '**', component: FillFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
