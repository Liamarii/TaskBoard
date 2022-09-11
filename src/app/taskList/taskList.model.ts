import { Task } from '../task/task.model';
import { v4 as uuid } from 'uuid';

export class TaskList {
  public Name: string = '';
  public Tasks: Array<Task> = [];

  public addTask(message: string) {
    if (this.Name.toLowerCase() == 'todo') {
      let task = new Task(uuid(), message);
      this.Tasks.push(task);
    }
  }

  public removeTask(task: Task) {
    this.Tasks = this.Tasks.filter((x) => x != task);
  }

  constructor(name: string = '', tasks: Array<Task> = []) {
    this.Name = name;
    this.Tasks = tasks;
  }
}
