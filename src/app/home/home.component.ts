import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  name: string = '';
  symptoms: string = '';
  allergies: string = '';
  age: number = 0;

  constructor(private router: Router) {}

  submit(details: NgForm) {
    if (details.valid) {
      this.name = details.value.name;
      /*
        // this.symptoms = details.value.symptoms;
        // this.allergies = details.value.allergies;
        // this.age = details.value.age;
      */
      this.router.navigate(['/response', this.name]);
    } else {
      console.log('Form is invalid');
    }
  }

  isEmpty(details: NgForm) {
    const { name, symptoms, allergies } = details.value;
    const isNameEmpty = !name || name.trim() === '';
    const isSymptomsEmpty = !symptoms || symptoms.trim() === '';
    const isAllergiesEmpty = !allergies || allergies.trim() === '';
    return isNameEmpty || isSymptomsEmpty || isAllergiesEmpty;
  }
}
