import { Component, OnInit } from '@angular/core';

import { AddTaskComponent } from '../../components/add-task/add-task.component';
@Component({
  selector: 'todo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  categories=[
    {
      id:1,
      title:'Work',
      path:"work",
      icon:'work',
      bgClr:'#FED049',
      type:'work'
    },
    {
      id:1,
      title:'Activity',
      path:"activity",
      icon:'directions_run',
      bgClr:'#FF8400',
      type:'activity'
    },
    {
      id:1,
      title:'Home',
      path:"home",
      icon:'home',
      bgClr:'#19376D',
      type:'home',
    },
    {
      id:1,
      title:'Entertainment',
      path:"entertainment",
      icon:'live_tv',
      bgClr:'#E21818',
      type:'entertainment'
    },
    {
      id:1,
      title:'Shopping',
      path:"shopping",
      icon:'shopping_cart',
      bgClr:'#FF5F9E',
      type:'shopping'
    },
    {
      id:1,
      title:'Travel',
      path:"travel",
      icon:'luggage',
      bgClr:'#1F8A70',
      type:'travel'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

 

}
