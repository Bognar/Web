import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SinglepostComponent } from './pages/singlepost/singlepost.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'blog', component:BlogComponent },
  { path: '', component:HomeComponent },
  { path: 'blog/:id', component:SinglepostComponent },
  { path: 'work', component:WorkComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
