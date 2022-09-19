import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { AppRoutingModule } from './app-routing.module';
import { JobApplicationComponent } from './job-application/job-application.component';
import { SquareComponent } from './square/square.component';
import { DirectivesAndPipesComponent } from './directives-and-pipes/directives-and-pipes.component';
import { HighlightDirective } from './highlight.directive';
import { FirstLetterCapitalizationPipe } from './first-letter-capitalization.pipe';
import { DaysSinceCalculatorPipe } from './days-since-calculator.pipe';
import { LightComponent } from './light/light.component';
import { LightSwitcherComponent } from './light-switcher/light-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    PersonFormComponent,
    JobApplicationComponent,
    SquareComponent,
    DirectivesAndPipesComponent,
    HighlightDirective,
    FirstLetterCapitalizationPipe,
    DaysSinceCalculatorPipe,
    LightComponent,
    LightSwitcherComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
