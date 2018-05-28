import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type UserFields = 'email' | 'password';
type FormErrors = {[user in UserFields]: string};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  formErrors: FormErrors = {
    'email': '',
    'password': ''
  };
  validationMessage = {
    'email': {
      'required': 'Oops! Please enter an email address',
      'email': `That doesn't look like a valid email address`
    },
    'password': {
      'required': 'Please enter a password',
      'pattern': 'It must contain at least one letter and one number',
      'minlength': 'Sorry.. it must be 6 characters minimum'
    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group(
      {
        'email': ['', [
          Validators.required,
          Validators.email
        ]],
        'password': ['', [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6)
        ]]
      }
    );
    this.userForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessage[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] = `${(messages as {[key: string]: string})[key]}`;
              }
            }
          }
        }
      }
    }
  }

  signUp() {
    return this.router.navigate(['/home']);
  }

}
