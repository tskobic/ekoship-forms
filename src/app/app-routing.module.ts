import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationComponent } from './pages/job-application/job-application.component';
import { PersonFormComponent } from './pages/person-form/person-form.component';
import { DirectivesAndPipesComponent } from './pages/directives-and-pipes/directives-and-pipes.component';
import { LightSwitcherComponent } from './pages/light-switcher/light-switcher.component';
import { FolderStructureComponent } from './pages/folder-structure/folder-structure.component';

const routes: Routes = [
  { path: 'job-application', component: JobApplicationComponent },
  { path: 'person', component: PersonFormComponent },
  { path: 'directives-and-pipes', component: DirectivesAndPipesComponent },
  { path: 'light-switcher', component: LightSwitcherComponent },
  { path: 'folder-structure', component: FolderStructureComponent },
  { path: '', redirectTo: '/job-application', pathMatch: 'full' },
  { path: '**', redirectTo: '/job-application' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
