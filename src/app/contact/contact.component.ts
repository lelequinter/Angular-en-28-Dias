import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  "checkAdult": string;
  "comment": boolean;
  "departament": string;
  "name": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  {
  
  model = {
    checkAdult: false,
    comment: "",
    departament: "",
    name: "",
  }
  
  constructor() {}


  onSubmit(form: NgForm) {
    console.log('form Values', form);
  }
}
