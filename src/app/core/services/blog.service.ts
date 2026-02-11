import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BlogArticle } from '@core/models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private http = inject(HttpClient);
  private readonly ARTICLES_URL = 'assets/blog/articles.json';

  getArticles(): Observable<BlogArticle[]> {
    return this.http.get<BlogArticle[]>(this.ARTICLES_URL);
  }

  getArticleBySlug(slug: string): Observable<BlogArticle | undefined> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.slug === slug))
    );
  }
}
