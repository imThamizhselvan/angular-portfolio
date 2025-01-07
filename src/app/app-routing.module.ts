import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';
import { BooksComponent } from './books/books.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'book', component: BooksComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
