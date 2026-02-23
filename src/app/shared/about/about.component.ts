import { Component } from '@angular/core';
import { SkillsChartComponent } from '@shared/skills-chart/skills-chart.component';
import { SkillChartData, getSkillsByCategory } from '@core/models/skill.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillsChartComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../app.component.scss']
})
export class AboutComponent {
  frontendSkills: SkillChartData[] = getSkillsByCategory('frontend');
  mobileSkills: SkillChartData[] = getSkillsByCategory('mobile');
  backendSkills: SkillChartData[] = getSkillsByCategory('backend');
  devopsSkills: SkillChartData[] = getSkillsByCategory('devops');
  aiSkills: SkillChartData[] = getSkillsByCategory('ai');
}
