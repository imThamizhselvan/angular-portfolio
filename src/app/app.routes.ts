import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'newsletter',
    loadComponent: () => import('./features/newsletter/newsletter.component').then(m => m.NewsletterComponent)
  },
  {
    path: 'podcast',
    loadComponent: () => import('./features/podcast/podcast.component').then(m => m.PodcastComponent)
  },
  {
    path: 'book',
    loadComponent: () => import('./features/books/books.component').then(m => m.BooksComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'blog',
    loadChildren: () => import('./features/blog/blog.routes').then(m => m.blogRoutes)
  },
  { path: '**', redirectTo: '/home' }
];
