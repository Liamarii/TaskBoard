import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Task } from '../task/task.model';
import { TaskList } from './taskList.model';
import { TaskListService } from './taskList.service';

@Component({
  selector: 'app-taskList',
  templateUrl: './taskList.component.html',
})
export class taskListComponent implements OnInit {
  @Input() TaskList: TaskList = new TaskList();

  constructor(
    private _headerService: HeaderService,
    private _taskListService: TaskListService
  ) {}

  ngOnInit(): void {
    this._headerService.currentMessage.subscribe((message) =>
      this.TaskList.addTask(message)
    );
  }

  public trackByFn(index: any) {
    return index;
  }

  delete(taskId: string) {
    this.TaskList.Tasks = this.TaskList.Tasks.filter(
      (Task) => Task.Id != taskId
    );
  }

  dragover(event: Event) {
    event.preventDefault();
  }

  drag(task: Task, taskList: TaskList) {
    this._taskListService.setSelectedTask(task);
    this._taskListService.setSelectedTaskList(taskList);
  }
}
