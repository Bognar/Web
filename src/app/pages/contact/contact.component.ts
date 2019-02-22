import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  visitor = localStorage.getItem('visitor');
  perica:number = 0;
  zbroji() {
    return this.perica = 2;
  }
  ngOnInit() {
    
    
  }

}
