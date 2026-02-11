import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { BlogService } from '@core/services/blog.service';
import { BlogArticle } from '@core/models/blog.model';

@Component({
  selector: 'app-blog-article',
  standalone: true,
  imports: [CommonModule, RouterLink, MarkdownModule],
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  article = signal<BlogArticle | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.blogService.getArticleBySlug(slug).subscribe({
        next: (article) => {
          if (article) {
            this.article.set(article);
          } else {
            this.error.set('Article not found');
          }
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load article');
          this.loading.set(false);
          console.error('Error loading article:', err);
        }
      });
    } else {
      this.error.set('Invalid article');
      this.loading.set(false);
    }
  }
}
