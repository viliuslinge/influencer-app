import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../core/auth.service';
import * as Parse from 'parse';

type UserFields = 'username' | 'password';
type FormErrors = {[user in UserFields]: string};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  formErrors: FormErrors = {
    'username': '',
    'password': ''
  };
  validationMessage = {
    'username': {
      'required': 'Please enter your username address',
    },
    'password': {
      'required': 'Forgot to enter a password!',
    }
  };

  user: any;
  loginMessage = {
    error: '',
    valid: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.buildForm();

    this.user = this.userService.getCurrentUser();
    if (this.user !== null) {
      this.router.navigate(['/admin']);
    }
  }

  buildForm() {
    this.userForm = this.formBuilder.group(
      {
        'username': ['', [
          Validators.required,
        ]],
        'password': ['', [
          Validators.required,
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

  adminLogIn() {
    for (const message in this.loginMessage) {
      if (message) {
        this.loginMessage[message] = '';
      }
    }
    this.authService.logIn(
      this.userForm.value.username,
      this.userForm.value.password
    )
    .then(() => this.loginMessage.valid = 'Login successful')
    .catch((error) => this.loginMessage.error = error.message);
  }
}
