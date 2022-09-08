import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { PersonService } from './person.service';

export function emailTakenValidator(
  personService: PersonService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return personService.getEmail(control.value).pipe(
      map((person) => (person ? { emailTaken: control.value } : null))
    );
  };
}
