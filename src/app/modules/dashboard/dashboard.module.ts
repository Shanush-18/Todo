import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodoBoardComponent } from './pages/todo-board/todo-board.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TodoReportsComponent } from './pages/todo-reports/todo-reports.component';



@NgModule({
  declarations: [    
    DashboardComponent,
    TodoBoardComponent,
    TodoReportsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
