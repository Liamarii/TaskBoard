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
  selectedTask: Task = new Task();
  sourceTaskList: TaskList = new TaskList();
  columnNames: Array<string> = ['todo', 'doing', 'done'];
  taskLists: Array<TaskList> = [
    new TaskList(this.columnNames[0]),
    new TaskList(this.columnNames[1]),
    new TaskList(this.columnNames[2]),
  ];

  constructor(private _taskListService: TaskListService) {}

  ngOnInit(): void {
    this._taskListService.Task.subscribe((task) => (this.selectedTask = task));
    this._taskListService.Source.subscribe(
      (taskList) => (this.sourceTaskList = taskList)
    );
  }

  dragover(event: Event) {
    event.preventDefault();
  }

  updateTask(taskList: TaskList) {
    this.sourceTaskList.Tasks = this.sourceTaskList.Tasks.filter(
      (x) => x != this.selectedTask
    );
    taskList.Tasks.push(this.selectedTask);
  }
}
