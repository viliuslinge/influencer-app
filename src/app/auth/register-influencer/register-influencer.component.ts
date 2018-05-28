import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as Parse from 'parse';

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

  selectedTabIndex = 0;
  user;

  userForm: FormGroup;
  formErrors: FormErrors = {
    'name': '',
    'surname': '',
    'instagram-name': '',
    'youtube-channel': '',
    'phone': '',
    'email': '',
    'city': '',
    'categories': ''
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
    }
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
          const messages = this.validationMessages[field];
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

  sendForm() {
    this.user = this.userForm.value;

    const Influencer = Parse.Object.extend('Influencer');
    const influencer = new Influencer();

    influencer.set('Name', this.user.name);
    influencer.set('Surname', this.user.surname);
    influencer.set('Instagram Name', this.user['instagram-name']);
    influencer.set('Youtube Channel', this.user['youtube-channel']);
    influencer.set('Email', this.user.email);
    influencer.set('Phone', this.user.phone);
    influencer.set('City', this.user.city);
    influencer.set('Categories', this.user.categories);

    influencer.save(null, {
      success: (user) => {
        console.log('New influencer created');
      },
      error: (user, error) => {
        console.log('Failed to create new influencer' + error.message);
      }
    });

    // const roleACL = new Parse.ACL();
    // roleACL.setPublicReadAccess(true);
    // const role = new Parse.Role('Administrator', roleACL);
    // role.getUsers().add(usersToAddToRole);
    // role.save();

    // const query = new Parse.Query(GameScore);
    // query.find({
    //   success: function(influencer) {
    //     // The object was retrieved successfully.
    //     console.log(influencer);
    //   },
    //   error: function(object, error) {
    //     // The object was not retrieved successfully.
    //     // error is a Parse.Error with an error code and message.
    //   }
    // });

    // query.get('wP7PsoEEeK', {
    //   success: function(influencer) {
    //     // The object was retrieved successfully.
    //     console.log(influencer);
    //   },
    //   error: function(object, error) {
    //     // The object was not retrieved successfully.
    //     // error is a Parse.Error with an error code and message.
    //   }
    // });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openNextStep() {
    this.selectedTabIndex += 1;
  }

  openPreviousStep() {
    this.selectedTabIndex -= 1;
  }
}
