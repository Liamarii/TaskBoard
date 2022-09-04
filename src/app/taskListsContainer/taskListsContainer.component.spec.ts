import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListsContainerComponent } from './taskListsContainer.component';

describe('ContainerComponent', () => {
  let component: TaskListsContainerComponent;
  let fixture: ComponentFixture<TaskListsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
