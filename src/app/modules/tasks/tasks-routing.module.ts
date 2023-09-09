import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
const routes: Routes = [
    {
        path: '',
        component: TasksComponent
    }, {
        path:':task',
        component:TaskListComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }