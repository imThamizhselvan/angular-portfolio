export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'mobile' | 'backend';
}

export interface SkillChartData {
  name: string;
  value: number;
}

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: 'ReactJS', level: 90, category: 'frontend' },
  { name: 'Angular', level: 85, category: 'frontend' },
  { name: 'NextJS', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },

  // Mobile
  { name: 'React Native', level: 85, category: 'mobile' },
  { name: 'Ionic', level: 75, category: 'mobile' },

  // Backend
  { name: 'NodeJS', level: 85, category: 'backend' },
  { name: 'AWS', level: 70, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'Firebase', level: 82, category: 'backend' },
  { name: 'Supabase', level: 75, category: 'backend' },
  { name: 'Netlify', level: 78, category: 'backend' },
  { name: 'Vercel', level: 80, category: 'backend' },
];

export function getSkillsByCategory(category: Skill['category']): SkillChartData[] {
  return SKILLS_DATA
    .filter(skill => skill.category === category)
    .map(skill => ({ name: skill.name, value: skill.level }))
    .sort((a, b) => b.value - a.value);
}
