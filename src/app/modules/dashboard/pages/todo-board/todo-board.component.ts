import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
export interface Todo {
  title: string
  status: string
  startDate: string
  endDate: string
  description: string
  id: number
  type?: string
}

@Component({
  selector: 'todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.scss']
})
export class TodoBoardComponent implements OnInit {
  todoList: any[] = []
  constructor(private readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(): void {
    this.todoService?.getTasks()?.subscribe(response => {
      if (response) {
        this.todoList = response;
        const todo = this.todoList?.filter(item => item?.type === 'Todo');
        const completed = this.todoList?.filter(item => item?.type === 'Completed');
        const inProgress = this.todoList?.filter(item => item?.type === 'In Progress');
    
        this.todoList=[
          {
            todo:todo
          },
          {
            completed:completed
          },
          {
            inProgress:inProgress
          },
        ]
      }
    });

  }



}
