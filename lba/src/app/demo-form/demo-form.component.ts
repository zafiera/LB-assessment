import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrl: './demo-form.component.scss'
})
export class DemoFormComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\+?\d{10,12}$/), Validators.maxLength(13)]],
      company: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/), Validators.maxLength(50)]],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted successfully!', this.registrationForm.value);
    } else {
      console.error('Invalid form submission. Please check the form.');
    }
  }
}
