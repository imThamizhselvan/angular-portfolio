import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  videoUrl?: string;
  techStack: string[];
  link?: string;
}

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
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = [
    // Add your projects here, for example:
    {
      title: 'Todo AI app',
      description: 'Easy to use TODO that integrates with OpenAI and Supabase',
      videoUrl: 'assets/videos/todo.mp4',
      techStack: [ 'Cursor', 'Supabase', 'Netlify', 'React', 'OpenAI', 'TypeScript'],
      link: 'https://todo.thamil.me'
    },
    {
      title: 'Deepseek AI chat',
      description: 'Deepseek chatbot that integrates with Deepseek API and OpenAI API',
      videoUrl: 'assets/videos/chatbot.mp4',
      techStack: ['OpenAI', 'TypeScript', 'React', 'Netlify', 'Cursor'],
      link: 'https://deepseek.thamil.me/'
    }
  ];

  isLoading = true;
  showScrollTop = false;
  projectState = 'normal';

  ngOnInit() {
    // Simulate loading delay
    setTimeout(() => this.isLoading = false, 2000);

    // Add scroll listener
    window.addEventListener('scroll', this.checkScroll.bind(this));
  }

  ngAfterViewInit() {
    // We can remove this method since we're not using Twitter widgets anymore
  }

  checkScroll() {
    this.showScrollTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getTechLogo(tech: string): string {
    // Map technology names to their Simple Icons slugs
    const techSlugs: { [key: string]: string } = {
      'Angular': 'angular',
      'React': 'react',
      'Node.js': 'nodedotjs',
      'TypeScript': 'typescript',
      'JavaScript': 'javascript',
      'Python': 'python',
      'SCSS': 'sass',
      'CSS': 'css3',
      'HTML': 'html5',
      'MongoDB': 'mongodb',
      'PostgreSQL': 'postgresql',
      'Docker': 'docker',
      'AWS': 'amazonaws',
      'Firebase': 'firebase',
      'Vue.js': 'vuedotjs',
      'Next.js': 'nextdotjs',
      'TailwindCSS': 'tailwindcss',
      'Bolt': 'openai',
      'Cursor': 'cursor',
      'Supabase': 'supabase',
      'Netlify': 'netlify',
      'DeepSeek': 'openai',
      'OpenAI': 'openai',

    };
    
    const slug = techSlugs[tech];
    return slug 
      ? `https://cdn.simpleicons.org/${slug}`
      : 'https://cdn.simpleicons.org/dev-dot-to'; // Default icon
  }
}
