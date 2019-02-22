import { Component, OnInit } from '@angular/core';
import mywork from '../../../assets/mywork.json';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }
  public mywork = mywork;
  visitor = localStorage.getItem('visitor');
  ngOnInit() {
  }

}
