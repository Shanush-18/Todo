import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo'
  },
  {
    path: 'todo',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tasks'
      },
      {
        path: 'tasks',
        loadChildren: () => import('./modules/tasks/tasks.module').then(module => module.TasksModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
