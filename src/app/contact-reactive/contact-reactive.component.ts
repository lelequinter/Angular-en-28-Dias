import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  name?: string;
  departments: string[] = [];
  selectedCity$ = this.dataSvc.selectedCity$;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly dataSvc: DataService
  ) {}

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['departments'];

    this.route.queryParams.subscribe((params: Params) => {
      this.name = params['name'];
    });
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
