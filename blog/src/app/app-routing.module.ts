import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: "", component: BlogComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'post/:name', component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
