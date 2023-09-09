import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SharedModule } from 'src/app/shared/shared.module';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TasksModule { }
