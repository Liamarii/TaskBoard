import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent{
  public toDoTasks:Array<string> = [];
  count = 1;

  public AddTask(task: string) : void
  {
    this.toDoTasks = [...this.toDoTasks, task + this.count.toString()];
    this.count++;
  }  
}

