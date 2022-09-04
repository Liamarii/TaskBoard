import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4} from 'uuid';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-taskListsContainer',
  templateUrl: './taskListsContainer.component.html',
  styleUrls: ['./taskListsContainer.component.scss']
})

export class TaskListsContainerComponent implements OnInit {
  taskListIndex: number = 0;
  taskLists : Array<TaskList> = [];
  task : Task = new Task();
  headerInput : string = "";
  taskContent : string = "";
  editableTaskId : string = "";

  constructor(private _headerService: HeaderService){}

  ngOnInit() {
    this._headerService.currentMessage.subscribe(message => this.headerInput = message);
    this.taskLists = [new TaskList(), new TaskList(), new TaskList()];
    this.taskLists[0].title = "Todo";
    this.taskLists[1].title = "Doing";
    this.taskLists[2].title = "Done";
    this._headerService.currentMessage.subscribe(message => {this.addTask(message)});
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

  editTask(taskId : string){
    this.editableTaskId = taskId;
  }

  taskIsEditable(taskId : string){
    return taskId === this.editableTaskId;
  }

  saveTask(content: string){
    console.log(content);
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