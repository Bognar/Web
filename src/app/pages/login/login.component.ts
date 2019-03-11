import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: string;
  pass: string;
  logedIn:boolean = false;
  userData:any;
  constructor(public afAuth: AngularFireAuth) {
   
  }
  
  logmein() {
    console.log(this.user)
    return this.afAuth.auth.signInWithEmailAndPassword(this.user, this.pass).then((user) => {
      this.logedIn = true;
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
    })
      .catch((error) => {
        console.log(error)
      });
  }
  logmeout (){
  return this.afAuth.auth.signOut().then(() => {
    localStorage.removeItem('user');
    this.logedIn = false;
    
  })
}


}
