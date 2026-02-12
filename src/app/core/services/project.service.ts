import { Injectable } from '@angular/core';
import { Project, TECH_LOGO_SLUGS } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'Todo AI app',
      description: 'Easy to use TODO that integrates with OpenAI and Supabase',
      videoUrl: 'assets/videos/todo.mp4',
      techStack: ['Cursor', 'Supabase', 'Netlify', 'React', 'OpenAI', 'TypeScript'],
      link: 'https://todo.thamil.me'
    },
    {
      title: 'Deepseek AI chat',
      description: 'Deepseek chatbot that integrates with Deepseek API and OpenAI API',
      videoUrl: 'assets/videos/chatbot.mp4',
      techStack: ['OpenAI', 'TypeScript', 'React', 'Netlify', 'Cursor'],
      link: 'https://deepseek.thamil.me/'
    },
    {
      title: 'Australia School Holidays 2026',
      description: 'Interactive web app showing 2026 school holidays for all Australian states with calendar view, countdown timer, and public holidays',
      techStack: ['React', 'TypeScript', 'Vite', 'Netlify', 'Claude'],
      link: 'https://ozschoolholidays.thamil.me'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getTechLogo(tech: string): string {
    const slug = TECH_LOGO_SLUGS[tech];
    return slug
      ? `https://cdn.simpleicons.org/${slug}`
      : 'https://cdn.simpleicons.org/dev-dot-to';
  }
}
