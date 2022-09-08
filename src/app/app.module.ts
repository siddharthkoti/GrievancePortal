import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { ViewFiledComponent } from './view-filed/view-filed.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyNumberDirective } from './custom-directives/only-number.directive';
import { HttpClientModule } from '@angular/common/http';
import { GrievanceDetailComponent } from './grievance-detail/grievance-detail.component';
import { GrievanceCardComponent } from './grievance-card/grievance-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FillFormComponent,
    ViewFiledComponent,
    OnlyNumberDirective,
    GrievanceDetailComponent,
    GrievanceCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
