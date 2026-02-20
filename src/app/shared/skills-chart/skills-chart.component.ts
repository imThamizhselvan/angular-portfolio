import { Component, Input, inject, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
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
export class SkillsChartComponent implements AfterViewInit, OnDestroy {
  @Input() title = '';
  @Input() data: SkillChartData[] = [];

  private themeService = inject(ThemeService);
  private el = inject(ElementRef);
  private resizeObserver!: ResizeObserver;

  view: [number, number] = [300, 200];
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = 'Proficiency';
  yAxisLabel = 'Skill';

  colorScheme = {
    domain: ['#da6d3c', '#e87f50', '#f59164', '#ffa378']
  };

  ngAfterViewInit(): void {
    const container = this.el.nativeElement.querySelector('.chart-container');
    if (container) {
      this.resizeObserver = new ResizeObserver(entries => {
        const width = Math.floor(entries[0].contentRect.width) - 40; // subtract 20px padding each side
        const height = this.data.length * 35 + 40;
        this.view = [Math.max(width, 160), height];
      });
      this.resizeObserver.observe(container);
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  get isDark(): boolean {
    return this.themeService.theme() === 'dark';
  }
}
