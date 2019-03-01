import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EditorModule } from '@tinymce/tinymce-angular';

const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDmyRoWF8dDFHzuc_OU0I-FzmdVDBKfcYs",
    authDomain: "testingstorehtml.firebaseapp.com",
    databaseURL: "https://testingstorehtml.firebaseio.com",
    projectId: "testingstorehtml",
    storageBucket: "testingstorehtml.appspot.com",
    messagingSenderId: "751267941861"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    WorkComponent,
    ContactComponent,
    HomeComponent,
    SinglepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
