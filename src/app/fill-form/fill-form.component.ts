import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss'],
})
export class FillFormComponent implements OnInit {
  grievanceForm: FormGroup = new FormGroup({});
  submitted = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.CreategrievanceForm();
  }

  CreategrievanceForm() {
    this.grievanceForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [null, [Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
      text: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.grievanceForm);
    this.submitted =  true;
    if(this.grievanceForm.valid) {

    } else {

    }
  }

  onReset() {
    this.submitted = false;
    this.grievanceForm.reset();
  }

   // Getter methods for all form controls
  // ------------------------------------
  get name() {
    return this.grievanceForm.get('name') as FormControl;
  }

  get email() {
    return this.grievanceForm.get('email') as FormControl;
  }
  get text() {
    return this.grievanceForm.get('text') as FormControl;
  }
  get mobile() {
    return this.grievanceForm.get('mobile') as FormControl;
  }
}
