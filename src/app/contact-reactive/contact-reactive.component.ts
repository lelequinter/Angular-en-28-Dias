import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.onPatchValue();
    // this.onSetValue();
  }

  onPatchValue() {
    this.contactForm.patchValue({ name: 'Bezael' });
  }

  // onSetValue() {
  //   this.contactForm.setValue({ name: 'Leyder' });
  // }

  onSubmit() {
    console.log('Form', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      checkAdult: ['', [Validators.required]],
      departament: [''],
      comment: ['Un comentario', [Validators.required]],
    });
  }
}
