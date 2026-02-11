import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '@core/services/blog.service';
import { BlogArticle } from '@core/models/blog.model';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  private blogService = inject(BlogService);

  articles = signal<BlogArticle[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.blogService.getArticles().subscribe({
      next: (articles) => {
        this.articles.set(articles);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load articles');
        this.loading.set(false);
        console.error('Error loading articles:', err);
      }
    });
  }
}
