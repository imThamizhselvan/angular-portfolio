import { Component, Input, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeService } from '@core/services/theme.service';
import { SkillChartData } from '@core/models/skill.model';

@Component({
  selector: 'app-skills-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './skills-chart.component.html',
  styleUrls: ['./skills-chart.component.scss']
})
export class SkillsChartComponent implements OnInit {
  @Input() title = '';
  @Input() data: SkillChartData[] = [];

  private themeService = inject(ThemeService);

  view: [number, number] = [350, 200];
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = 'Proficiency';
  yAxisLabel = 'Skill';

  colorScheme = {
    domain: ['#da6d3c', '#e87f50', '#f59164', '#ffa378']
  };

  ngOnInit(): void {
    this.updateChartView();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateChartView();
  }

  private updateChartView(): void {
    const maxItems = 7;
    const barHeight = 35;
    const padding = 40;
    const height = maxItems * barHeight + padding;
    const isMobile = window.innerWidth <= 768;
    // On mobile subtract container margins/paddings (skillsContainer: 10+12px each side, chart margin: 0)
    const width = isMobile ? window.innerWidth - 64 : 350;
    this.view = [width, height];
  }

  get isDark(): boolean {
    return this.themeService.theme() === 'dark';
  }

  get axisColor(): string {
    return this.isDark ? '#b0b0b0' : '#555555';
  }
}
