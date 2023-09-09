import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoReportsComponent } from './todo-reports.component';

describe('TodoReportsComponent', () => {
  let component: TodoReportsComponent;
  let fixture: ComponentFixture<TodoReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
