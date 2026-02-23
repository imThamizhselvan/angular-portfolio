import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scale', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.02)' })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);

  projects: Project[] = [];
  isLoading = true;
  showScrollTop = false;
  projectState = 'normal';

  // One current-slide index per project
  carouselIndices: number[] = [];

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.carouselIndices = this.projects.map(() => 0);
    setTimeout(() => this.isLoading = false, 2000);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getTechLogo(tech: string): string {
    return this.projectService.getTechLogo(tech);
  }

  prevSlide(projectIdx: number, total: number) {
    this.carouselIndices[projectIdx] = (this.carouselIndices[projectIdx] - 1 + total) % total;
  }

  nextSlide(projectIdx: number, total: number) {
    this.carouselIndices[projectIdx] = (this.carouselIndices[projectIdx] + 1) % total;
  }

  setSlide(projectIdx: number, slideIdx: number) {
    this.carouselIndices[projectIdx] = slideIdx;
  }
}
