import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationComponent } from './job-application/job-application.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { DirectivesAndPipesComponent } from './directives-and-pipes/directives-and-pipes.component';

const routes: Routes = [
  { path: 'job-application', component: JobApplicationComponent },
  { path: 'person', component: PersonFormComponent },
  { path: 'directives-and-pipes', component: DirectivesAndPipesComponent },
  { path: '', redirectTo: '/job-application', pathMatch: 'full' },
  { path: '**', redirectTo: '/job-application' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
