import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemsComponent } from './task-items.component';

describe('TaskItemsComponent', () => {
  let component: TaskItemsComponent;
  let fixture: ComponentFixture<TaskItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemsComponent]
    });
    fixture = TestBed.createComponent(TaskItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
