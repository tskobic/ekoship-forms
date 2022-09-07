import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobApplicant } from '../job-applicant';

import { positions } from '../mock-positions';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  positions = positions;

  model = new JobApplicant('', '', this.positions[0]);

  reactiveForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(this.model.firstName, Validators.required),
      lastName: new FormControl(this.model.lastName, Validators.required),
      position: new FormControl(this.model.position, Validators.required),
      experience: new FormControl(this.model.experience, Validators.min(0)),
    });

    this.reactiveForm.controls['position'].valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  get firstName() {
    return this.reactiveForm.get('firstName')!;
  }

  get lastName() {
    return this.reactiveForm.get('lastName')!;
  }

  get position() {
    return this.reactiveForm.get('position')!;
  }

  get experience() {
    return this.reactiveForm.get('experience')!;
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
