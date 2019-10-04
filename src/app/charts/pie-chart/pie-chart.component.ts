import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  @Input() inputData: any;
  @Input() limit: number;
  
  pieChartData: number[] = [350, 450, 120];
  pieChartLabels: string[] = ['Sanders mannelijkheid', 'PILS', 'Laurens mannelijkheid'];

  colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b','#ffd166'],
      borderColor: '#111'
      
    }
  ];

  pieChartType = 'doughnut';

  ngOnInit() {
  }

}
