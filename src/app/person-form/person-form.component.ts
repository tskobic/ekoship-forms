import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { emailTakenValidator } from '../email.validator';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  model = new Person('', '', '');

  personForm!: FormGroup;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personForm = new FormGroup({
      firstName: new FormControl(this.model.firstName),
      lastName: new FormControl(this.model.lastName),
      email: new FormControl(this.model.email, {
        validators: [Validators.required, Validators.email],
        asyncValidators: emailTakenValidator(this.personService),
        updateOn: 'blur',
      }),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
