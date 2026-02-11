import { Routes } from '@angular/router';

export const blogRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./blog-list/blog-list.component').then(m => m.BlogListComponent)
  },
  {
    path: ':slug',
    loadComponent: () => import('./blog-article/blog-article.component').then(m => m.BlogArticleComponent)
  }
];
