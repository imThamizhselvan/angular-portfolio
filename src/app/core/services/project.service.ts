import { Injectable } from '@angular/core';
import { Project, TECH_LOGO_SLUGS } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'Andy AI',
      description: 'AI-powered receptionist that answers business calls 24/7, understands caller needs, and books appointments automatically — so businesses never miss a customer.',
      techStack: ['React', 'Vite', 'TailwindCSS', 'Node.js', 'Prisma', 'Stripe', 'Clerk', 'Vercel'],
      link: 'https://andyai.imthamil.com/',
    },
    {
      title: 'Todo AI app',
      description: 'Easy to use TODO that integrates with OpenAI and Supabase',
      videoUrl: 'assets/videos/todo.mp4',
      techStack: ['Cursor', 'Supabase', 'Netlify', 'React', 'OpenAI', 'TypeScript'],
      link: 'https://todo.imthamil.com'
    },
    {
      title: 'Deepseek AI chat',
      description: 'Deepseek chatbot that integrates with Deepseek API and OpenAI API',
      videoUrl: 'assets/videos/chatbot.mp4',
      techStack: ['OpenAI', 'TypeScript', 'React', 'Netlify', 'Cursor'],
      link: 'https://deepseek.imthamil.com/'
    },
    {
      title: 'Australia School Holidays 2026',
      description: 'Interactive web app showing 2026 school holidays for all Australian states with calendar view, countdown timer, and public holidays',
      techStack: ['React', 'TypeScript', 'Vite', 'Netlify', 'Claude'],
      link: 'https://ozschoolholidays.imthamil.com'
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
