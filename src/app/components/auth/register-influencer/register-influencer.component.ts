import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

type UserFields =
  'name' |
  'surname' |
  'instagram-name' |
  'youtube-channel' |
  'phone' |
  'email' |
  'city' |
  'categories';
 type FormErrors = {[user in UserFields]: string};

@Component({
  selector: 'app-register-influencer',
  templateUrl: './register-influencer.component.html',
  styleUrls: ['./register-influencer.component.scss']
})
export class RegisterInfluencerComponent implements OnInit {

  userForm: FormGroup;
  formErrors: FormErrors = {
    'name': '',
    'surname': '',
    'instagram-name': '',
    'youtube-channel': '',
    'phone': '',
    'email': '',
    'city': '',
    'categories': '',
  };
  validationMessages = {
    'name': {
      'required': 'Oops! Please enter your name'
    },
    'surname': {
      'required': 'Oops! Please enter your surname'
    },
    'instagram-name': {
      'required': 'Oops! Please enter your instagram name'
    },
    'youtube-channel': {
      'required': 'Oops! Please enter your youtube channel name'
    },
    'phone': {
      'required': 'Oops! Please enter your phone number'
    },
    'email': {
      'required': 'Oops! Please enter your email address',
      'email': `That doesn't look like a valid email address`
    },
    'city': {
      'required': 'Oops! Please enter your city'
    },
    'categories': {
      'required': 'Oops! Please choose at least one category'
    },
  };

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterInfluencerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group(
      {
        'name': ['', [
          Validators.required,
        ]],
        'surname': ['', [
          Validators.required,
        ]],
        'instagram-name': ['', [
          Validators.required,
        ]],
        'youtube-channel': ['', [
          Validators.required,
        ]],
        'phone': ['', [
          Validators.required,
        ]],
        'email': ['', [
          Validators.required,
          Validators.email
        ]],
        'city': ['', [
          Validators.required,
        ]],
        'categories': ['', [
          Validators.required,
        ]],
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
      if (Object.prototype.hasOwnProperty.bind(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const message = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.bind(control.errors, key)) {
                this.formErrors[field] = `${(message as {[key: string]: string})[key]}`;
              }
            }
          }
        }
      }
    }
  }

  sendForm() {
    console.log('Form has been sent');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
