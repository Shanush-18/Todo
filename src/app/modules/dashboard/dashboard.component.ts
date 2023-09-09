import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles=[
    {
      title:'Overview',
      icon:'dashboard',
      path:'over-view'
    },
    {
      title:'Reports',
      icon:'dashboard',
      path:'reports'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
