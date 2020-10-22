import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
    email: new FormControl(''),
    subscribe: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {

  }

  submitForm() {
    console.log(this.contactForm.value)
  }

}
