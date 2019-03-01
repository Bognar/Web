import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogpost: AngularFireList<any>;
  public textdata:string = "";
  public posttitle:string = "";
  public imgPath:string = "";
  public desc:string = "";
  public author:string = "";
  public tags:any[] = [];

  
   // date for post
   today = new Date();
   date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
   posts: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { 
     //get firebase observable and key value
     this.blogpost = db.list('/blogpost');
     this.posts = this.blogpost.snapshotChanges().pipe(
       map(changes => 
         changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
       )
     );
  }

  ngOnInit() {
  }

}
