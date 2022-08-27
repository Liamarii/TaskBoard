import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4} from 'uuid';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {
  taskListIndex: number = 0;
  taskLists : Array<TaskList> = [];
  task : Task = new Task();
  taskContent : string = "";
  taskEditable : boolean = false;

  constructor(private _taskService: TaskService){}

  ngOnInit() {
    this._taskService.currentMessage.subscribe(message => this.taskContent = message);
    this.taskLists = [new TaskList(), new TaskList(), new TaskList()];
    this.taskLists[0].title = "Todo";
    this.taskLists[1].title = "Doing";
    this.taskLists[2].title = "Done";
    this._taskService.currentMessage.subscribe(message => {this.addTask(message)});
  }

  public trackByFn(index: any) {
    return index;
  }

  dragging(task: Task, taskListIndex: number){
    this.task = task;
    this.task.content = task.content;
    this.taskListIndex = taskListIndex;
  }

  dragover(event: Event){
    event.preventDefault();
  }

  dropping(targetTaskListId: number){
    this.taskLists[this.taskListIndex].tasks = this.taskLists[this.taskListIndex].tasks.filter(x => x.id !== this.task.id);
    this.taskLists[targetTaskListId].tasks.push(this.task);
  }

  removeTask(taskId: string, taskListIndex: number){
    this.taskLists[taskListIndex].tasks = this.taskLists[taskListIndex].tasks.filter(x => x.id !== taskId);
  }

  addTask(message: string){
    if(message !== '')
    {
      let task = new Task()
      {
        task.content = message;
        task.id = uuidv4().toString();
      };
      this.taskLists[0].tasks.push(task);
    }
  }

  editTask(){
    this.taskEditable = !this.taskEditable;
    return this.taskEditable;
  }

  saveTask(){
    alert('working on it');
  }
}


class TaskList{
  public tasks: Array<Task> = [];
  public title: string = "";
}

class Task{
  public content: string = "";
  public id: string = "";
}