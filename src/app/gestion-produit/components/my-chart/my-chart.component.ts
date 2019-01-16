import { Component, OnInit, Input, ɵConsole, ViewChild, AfterViewChecked } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit, AfterViewChecked {

  @ViewChild('graphElement')
  private graphElement: ChartComponent;

  @Input() type: String;
  @Input() title: String;
  @Input() data: any;

  @Input()
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.graphElement.chart.update();
  }


}
