import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubscribeFormComponent implements OnInit {
  subscribeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    })
  }

  get email() {
    return this.subscribeForm.get('email');
  }

  emailSubscribe(): void {
    if (!this.email?.invalid) {
      alert('Done');
      this.subscribeForm.get('email')?.setValue('');
      this.subscribeForm.get('email')?.setErrors(null);
    } else {
      this.subscribeForm.get('email')?.markAsTouched();
    }
  }
}
