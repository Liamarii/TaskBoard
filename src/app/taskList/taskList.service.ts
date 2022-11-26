import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TaskList } from './taskList.model';
import { Task } from '../task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private selectedTaskList = new ReplaySubject<TaskList>();
  private selectedTask = new ReplaySubject<Task>();

  public Task = this.selectedTask.asObservable();
  public Source = this.selectedTaskList.asObservable();

  setSelectedTaskList(selectedTaskList: TaskList) {
    this.selectedTaskList.next(selectedTaskList);
  }

  setSelectedTask(selectedTask: Task) {
    this.selectedTask.next(selectedTask);
  }
}
