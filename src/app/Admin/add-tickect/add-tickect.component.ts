import { NgForm } from '@angular/forms';
import { Ticket } from './ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tickect',
  templateUrl: './add-tickect.component.html',
  styleUrls: ['./add-tickect.component.css']
})
export class AddTickectComponent implements OnInit {


  public ticket: Ticket = new Ticket();



  constructor() { }

  ngOnInit(): void {
  }

  public saveData(registerForm: NgForm) {
    console.log(registerForm.form)
    console.log('valeurs:', JSON.stringify(registerForm.value))

    console.log("Hello")
  }
}
