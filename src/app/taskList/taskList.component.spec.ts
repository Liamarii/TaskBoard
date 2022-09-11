import { ComponentFixture, TestBed } from '@angular/core/testing';
import { taskListComponent } from './taskList.component';

describe('taskListComponent', () => {
  let component: taskListComponent;
  let fixture: ComponentFixture<taskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [taskListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(taskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
