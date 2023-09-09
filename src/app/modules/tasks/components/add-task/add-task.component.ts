import { Component, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { filter } from 'rxjs';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'todo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @ViewChild('form') ngForm!: NgForm;
  @Input() task!: string;
  @Input() id!: number | undefined;
  @Output() onClose: EventEmitter<void | any> = new EventEmitter<any>();

  constructor(private readonly todoservice: TodoService) { }

  ngOnInit(): void {
    if (this.id) {
      this.todoservice.getTask(this.id)?.pipe(filter(data => !!data))?.subscribe(resp => {
        if (resp) {
          this.ngForm?.setValue(
            {
              title: resp?.title,
              status: resp?.status,
              startDate: resp?.startDate,
              endDate: resp?.endDate,
              description: resp?.description,

            }
          )
        }
      })
    }
  }
  onSave(): void {
    if (this.id) {
      this.todoservice.updateTask({ ...this.ngForm.value, type: this.task, id: this.id })?.subscribe(resp => {
        if (resp) {
          this.onClose.emit(resp)
        }
      })
    } else {
      this.todoservice.addTask({ ...this.ngForm.value, type: this.task })?.subscribe(resp => {
        if (resp) {
          this.onClose.emit(resp)
        }
      })
    }
  }

  onCancel(): void {
    this.onClose.emit()
  }
}
