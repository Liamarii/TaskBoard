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
  SelectedTask: Task = new Task();
  SourceTaskList: TaskList = new TaskList();
  ColumnNames: Array<string> = ['todo', 'doing', 'done'];
  TaskLists: Array<TaskList> = [
    new TaskList(this.ColumnNames[0]),
    new TaskList(this.ColumnNames[1]),
    new TaskList(this.ColumnNames[2]),
  ];

  constructor(private taskListService: TaskListService) {}

  ngOnInit(): void {
    this.taskListService.Task.subscribe((task) => (this.SelectedTask = task));
    this.taskListService.Source.subscribe(
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
