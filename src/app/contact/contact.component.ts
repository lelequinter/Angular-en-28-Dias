import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

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
export class ContactComponent implements OnInit {

  @ViewChild('contactForm') contactForm!: NgForm;

  id!: string;

  model = {
    checkAdult: false,
    comment: "",
    departament: "",
    name: "",
  }

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
  }

  onSubmit() {
    console.log('form Values', this.contactForm);
  }
}
