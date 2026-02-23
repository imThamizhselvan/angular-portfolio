import { Injectable } from '@angular/core';
import { Project, TECH_LOGO_SLUGS } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'CEO Habits',
      description: 'Gamified habit tracker with an 8-level career progression system. Track daily habits, earn XP, unlock achievements, and climb from Intern to CEO.',
      screenshots: [
        'assets/screenshots/ceohabits/1.png',
        'assets/screenshots/ceohabits/2.png',
        'assets/screenshots/ceohabits/3.png',
      ],
      techStack: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Supabase', 'Clerk', 'Zustand', 'Framer Motion', 'Netlify'],
      link: 'https://habits.imthamil.com/',
    },
    {
      title: 'Andy AI',
      description: 'AI-powered receptionist that answers business calls 24/7, understands caller needs, and books appointments automatically — so businesses never miss a customer.',
      screenshots: [
        'assets/screenshots/andyai/1.png',
        'assets/screenshots/andyai/2.png',
      ],
      techStack: ['React', 'Vite', 'TailwindCSS', 'Node.js', 'Prisma', 'Stripe', 'Clerk', 'Vercel'],
      link: 'https://andyai.imthamil.com/',
    },
    {
      title: 'Todo AI app',
      description: 'Easy to use TODO that integrates with OpenAI and Supabase',
      screenshots: [
        'assets/screenshots/todo/1.png',
        'assets/screenshots/todo/2.png',
      ],
      techStack: ['Cursor', 'Supabase', 'Netlify', 'React', 'OpenAI', 'TypeScript'],
      link: 'https://todo.imthamil.com'
    },
    {
      title: 'Deepseek AI chat',
      description: 'Deepseek chatbot that integrates with Deepseek API and OpenAI API',
      screenshots: [
        'assets/screenshots/deepseek/1.png',
        'assets/screenshots/deepseek/2.png',
      ],
      techStack: ['OpenAI', 'TypeScript', 'React', 'Netlify', 'Cursor'],
      link: 'https://deepseek.imthamil.com/'
    },
    {
      title: 'Oz School Holidays',
      description: 'Interactive web app showing 2026 school holidays for all Australian states with calendar view, countdown timer, and public holidays',
      screenshots: [
        'assets/screenshots/ozholidays/1.png',
        'assets/screenshots/ozholidays/2.png',
      ],
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
