import { Component } from '@angular/core';
import { Task } from '../task/task.model';
import { TaskList } from '../taskList/taskList.model';
import { TaskListService } from '../taskList/taskList.service';

@Component({
  selector: 'app-taskBoard',
  templateUrl: './taskBoard.component.html',
  styleUrls: ['./taskBoard.component.scss'],
})
export class TaskBoardComponent {
  public SelectedTask: Task = new Task();
  public SourceTaskList: TaskList = new TaskList();
  public ColumnNames: Array<string> = ['todo', 'doing', 'done'];
  public TaskLists: Array<TaskList> = [
    new TaskList(this.ColumnNames[0]),
    new TaskList(this.ColumnNames[1]),
    new TaskList(this.ColumnNames[2]),
  ];

  constructor(private _taskListService: TaskListService) {}

  ngOnInit(): void {
    this._taskListService.Task.subscribe((task) => (this.SelectedTask = task));
    this._taskListService.Source.subscribe(
      (taskList) => (this.SourceTaskList = taskList)
    );
  }

  dragover(event: Event) {
    event.preventDefault();
  }

  updateTask(taskList: TaskList) {
    this.SourceTaskList.Tasks = this.SourceTaskList.Tasks.filter(
      (x) => x != this.SelectedTask
    );
    taskList.Tasks.push(this.SelectedTask);
  }
}
