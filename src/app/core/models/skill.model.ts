export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'mobile' | 'backend' | 'devops';
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
  { name: 'Flutter', level: 40, category: 'mobile' },
  { name: 'Native Script', level: 30, category: 'mobile' },


  // DevOps
  { name: 'GitHub', level: 90, category: 'devops' },
  { name: 'Jenkins', level: 82, category: 'devops' },
  { name: 'S3', level: 80, category: 'devops' },
  { name: 'CloudFront', level: 75, category: 'devops' },
  { name: 'Lambda', level: 72, category: 'devops' },
  { name: 'CloudWatch', level: 70, category: 'devops' },
  { name: 'EventBridge', level: 68, category: 'devops' },
  { name: 'SQS', level: 68, category: 'devops' },
  { name: 'SNS', level: 65, category: 'devops' },
  { name: 'Docker', level: 68, category: 'devops' },
  { name: 'Fastlane', level: 62, category: 'devops' },

  // Backend
  { name: 'NodeJS', level: 85, category: 'backend' },
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
