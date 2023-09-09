import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from '../utils/todo.interface';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  rootUrl: string = 'http://localhost:3000/todos'
  constructor(private httpClient: HttpClient) { }

  getTasks(task?: string): Observable<TaskModel[]> {
    return this.httpClient.get<TaskModel[]>(this.rootUrl, {
      params: task ?{
        type: task!
      } :undefined
    })
  }
  getTask(id: number): Observable<TaskModel> {
    return this.httpClient.get<TaskModel>(this.rootUrl + `/${id}`)
  }
  addTask(payload: TaskModel): Observable<TaskModel[]> {
    return this.httpClient.post<TaskModel[]>(this.rootUrl, payload)
  }
  updateTask(payload: TaskModel): Observable<TaskModel[]> {
    return this.httpClient.put<TaskModel[]>(this.rootUrl + `/${payload?.id}`, payload)
  }
  deleteTask(id: number): Observable<TaskModel> {
    return this.httpClient.delete<TaskModel>(this.rootUrl + `/${id}`)
  }
}
