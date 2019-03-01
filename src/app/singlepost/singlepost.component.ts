import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  key :string;
  onepost: Observable<any>;
  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
    this.key = this.route.snapshot.params['id'];
    this.onepost = db.object('blogpost/'+ this.key).valueChanges();
   }

  ngOnInit() {
  }

}
