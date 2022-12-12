import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PersonFormComponent } from './pages/person-form/person-form.component';
import { AppRoutingModule } from './app-routing.module';
import { JobApplicationComponent } from './pages/job-application/job-application.component';
import { SquareComponent } from './components/square/square.component';
import { DirectivesAndPipesComponent } from './pages/directives-and-pipes/directives-and-pipes.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FirstLetterCapitalizationPipe } from './pipes/first-letter-capitalization.pipe';
import { DaysSinceCalculatorPipe } from './pipes/days-since-calculator.pipe';
import { LightComponent } from './components/light/light.component';
import { LightSwitcherComponent } from './pages/light-switcher/light-switcher.component';
import { FolderStructureComponent } from './pages/folder-structure/folder-structure.component';

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
    LightSwitcherComponent,
    FolderStructureComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
