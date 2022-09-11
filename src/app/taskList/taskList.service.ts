import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TaskList } from './taskList.model';
import { Task } from '../task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private _selectedTaskList = new ReplaySubject<TaskList>();
  private _targetTaskList = new ReplaySubject<TaskList>();
  private _selectedTask = new ReplaySubject<Task>();

  public Task = this._selectedTask.asObservable();
  public Target = this._targetTaskList.asObservable();
  public Source = this._selectedTaskList.asObservable();

  setSelectedTaskList(selectedTaskList: TaskList) {
    this._selectedTaskList.next(selectedTaskList);
  }

  setTargetTaskList(targetTaskList: TaskList) {
    this._targetTaskList.next(targetTaskList);
  }

  setSelectedTask(selectedTask: Task) {
    this._selectedTask.next(selectedTask);
  }
}
