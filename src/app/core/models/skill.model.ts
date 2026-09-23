export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'mobile' | 'backend' | 'devops' | 'ai';
}

export interface SkillChartData {
  name: string;
  value: number;
}

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: 'React', level: 92, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Angular', level: 88, category: 'frontend' },
  { name: 'Redux', level: 85, category: 'frontend' },
  { name: 'Storybook', level: 82, category: 'frontend' },

  // Mobile
  { name: 'React Native', level: 88, category: 'mobile' },
  { name: 'Ionic', level: 78, category: 'mobile' },
  { name: 'Capacitor', level: 72, category: 'mobile' },

  // Backend
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Microservices / Serverless', level: 85, category: 'backend' },
  { name: 'DynamoDB', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 78, category: 'backend' },
  { name: 'Redis', level: 72, category: 'backend' },

  // DevOps & Cloud
  { name: 'AWS (Lambda, API Gateway, EventBridge)', level: 88, category: 'devops' },
  { name: 'GitHub Actions', level: 85, category: 'devops' },
  { name: 'LaunchDarkly', level: 80, category: 'devops' },
  { name: 'Docker', level: 78, category: 'devops' },
  { name: 'Pulumi', level: 75, category: 'devops' },
  { name: 'CloudFormation', level: 72, category: 'devops' },
  { name: 'Kubernetes', level: 68, category: 'devops' },

  // AI & LLM
  { name: 'AWS Bedrock', level: 90, category: 'ai' },
  { name: 'Prompt Engineering', level: 88, category: 'ai' },
  { name: 'AI Agents & Tool Calling', level: 88, category: 'ai' },
  { name: 'Model Context Protocol (MCP)', level: 85, category: 'ai' },
  { name: 'LLM Document Extraction / OCR', level: 82, category: 'ai' },
  { name: 'RAG', level: 78, category: 'ai' },
  { name: 'LangGraph.js', level: 75, category: 'ai' },
];

export function getSkillsByCategory(category: Skill['category']): SkillChartData[] {
  return SKILLS_DATA
    .filter(skill => skill.category === category)
    .map(skill => ({ name: skill.name, value: skill.level }))
    .sort((a, b) => b.value - a.value);
}
