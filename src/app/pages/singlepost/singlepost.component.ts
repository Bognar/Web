import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent {
  public textdata: string = "";
  public posttitle: string = "";
  public imgPath: string = "";
  public desc: string = "";
  public author: string = "";
  public tags: any[] = [];
  singleposttrue = false;


  // date for post
  today = new Date();
  date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
  key: string;
  user: any;

  onepost: Observable<any>;
  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, public afAuth: AngularFireAuth) {
    this.key = this.route.snapshot.params['id'];
    this.onepost = db.object('blogpost/' + this.key).valueChanges();
    afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;

      } else {
        console.log('not logged in so no access');
      }
    });
  }

  posthtml() {
    // push input to firebase
    this.db.list('blogpost').push({
      html: this.textdata,
      title: this.posttitle,
      imgPath: this.imgPath,
      desc: this.desc,
      tags: this.tags,
      author: this.author,
      date: this.date
    });
  }
  // delete post from firebase rt db depending on key value 
  del(key:string) {
    this.db.object('/blogpost/' + this.key).remove();
  }
  //Edit post  
  edit(key:string) {
    this.db.object('/blogpost/' + this.key).update({
      html: this.textdata,
      title: this.posttitle,
      imgPath: this.imgPath,
      desc: this.desc,
      tags: this.tags,
      author: this.author,
      date: this.date
    });
  }

}
