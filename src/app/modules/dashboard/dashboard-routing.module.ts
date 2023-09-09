import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TodoReportsComponent } from './pages/todo-reports/todo-reports.component';
import { TodoBoardComponent } from './pages/todo-board/todo-board.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'over-view',
    component: TodoBoardComponent
  },
  {
    path: 'reports',
    component: TodoReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
