import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, first } from 'rxjs';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { TodoService } from 'src/app/service/todo.service';
import { TaskModel } from 'src/app/utils/todo.interface';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @ViewChild(PlaceholderDirective) addTaskHost!: PlaceholderDirective
  tasks: TaskModel[] = []
  title!: string;
  task: any;
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly todoService: TodoService) {
    this.activatedRoute.queryParams.pipe(filter(data => !!data), first()).subscribe(params => {
      if (params) {
        this.title = params['category']
      }
    })
    this.activatedRoute.params.pipe(filter(data => !!data), first()).subscribe(params => {
      if (params) {
        this.task = params['task']
      }
    })
  }

  ngOnInit(): void {
    this.getTasks()
  }
  addTask(id?: number): void {
    const viewRef = this.addTaskHost?.viewContainerRef;
    viewRef?.clear();
    const component = viewRef?.createComponent(AddTaskComponent);
    component.instance.task = this.task;
    component.instance.id = id;
    component.instance.onClose.subscribe(res => {
      if (res) {
        this.getTasks()
      }
      viewRef.clear();
    })
  }

  getTasks(): void {
    this.todoService?.getTasks(this.task)?.subscribe(response => {
      if (response) {
        this.tasks = response
      }
    })
  }

  onDelete(id: number | undefined): void {
    this.todoService?.deleteTask(id!)?.subscribe(response => {
      if (response) {
        this.getTasks()
      }
    })
  }
}
