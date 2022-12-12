import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobApplicant } from '../../models/job-applicant';

import { positions } from '../../mocks/mock-positions';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  positions = positions;

  model = new JobApplicant('', '', this.positions[0]);

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.resetForm();
  }
}
