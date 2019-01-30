import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  
})
/** dashboard component*/
export class DashboardComponent implements OnInit{
    /** dashboard ctor */
  PieChart1 = [];
  PieChart2 = [];
  ngOnInit() {

    this.PieChart1 = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Blue","Yellow"],
        datasets: [{
          label: '# of Votes',
          data: [9, 7],
          backgroundColor: [
            'rgba(102, 79, 231, 1)',
            'rgba(229, 225, 85, 1)'
            
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
           
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.PieChart2 = new Chart('pieChart2', {
      type: 'pie',
      data: {
        labels: ["Blue", "Yellow"],
        datasets: [{
          label: '# of Votes',
          data: [9, 7],
          backgroundColor: [
            'rgba(102, 79, 231, 1)',
            'rgba(229, 225, 85, 1)'

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'

          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
