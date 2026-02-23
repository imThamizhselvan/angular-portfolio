export interface Project {
  title: string;
  description: string;
  screenshots?: string[];
  techStack: string[];
  link?: string;
}

export const TECH_LOGO_SLUGS: { [key: string]: string } = {
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
  'Vite': 'vite',
  'Claude': 'anthropic',
  'Stripe': 'stripe',
  'Clerk': 'clerk',
  'Prisma': 'prisma',
  'Vercel': 'vercel',
  'Zustand': 'zustand',
  'Radix UI': 'radixui',
  'Framer Motion': 'framer',
};
