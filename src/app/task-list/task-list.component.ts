import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public toDoTasks: Array <string> = ["item 1", "item 2", "item 3", "item 4", "item 5"];
  public doingTasks: Array <string> = ["item 1", "item 2", "item 3", "item 4"];
  public doneTasks: Array <string> = ["item 1", "item 2"];

  currentSelection: string = "";
  takenFromList: string = "";
  hoveringOverTask: string = "";
  hoveringOverTaskList: string = "";
  emptyTaskListText: string = "No tasks";

  public dragging(task: string, takenFromList: string) {
      this.currentSelection = task;
      this.takenFromList = takenFromList;
  }

  public dragover(event: Event, hoveringOverTask: string) {
      event.preventDefault();
      this.hoveringOverTask = hoveringOverTask;
  }

  public dropping(event: Event) {
      event.preventDefault();
      let targettedTaskListId = (event.target as HTMLElement).id;

      if(this.takenFromList != targettedTaskListId){
        this.moveTaskToDifferentTaskList(targettedTaskListId);
      }
      else{
      switch (this.takenFromList) {
        case 'todo':
          this.reorderTaskInTaskList('todo');
          break;
        case 'doing':
          this.reorderTaskInTaskList('doing');
          break;
        case 'done':
          this.reorderTaskInTaskList('done');
          break;
      }
    }
  }

  private reorderTaskInTaskList(targettedTaskList: string)
  {
    if (this.takenFromList == 'todo' && targettedTaskList == 'todo')
    {     
      let hoverIndex = this.toDoTasks.indexOf(this.hoveringOverTask);
      this.removeDraggedTaskFromTaskList();
      this.toDoTasks.splice(hoverIndex, 0, this.currentSelection);
    }
    if (this.takenFromList == 'doing' && targettedTaskList == 'doing')
    {        
      let hoverIndex = this.doingTasks.indexOf(this.hoveringOverTask);
      this.removeDraggedTaskFromTaskList();
      this.doingTasks.splice(hoverIndex, 0, this.currentSelection);
    }
    if (this.takenFromList == 'done' && targettedTaskList == 'done')
    {
      let hoverIndex = this.doneTasks.indexOf(this.hoveringOverTask);
      this.removeDraggedTaskFromTaskList();
      this.doneTasks.splice(hoverIndex, 0, this.currentSelection);
    }
  }

  private moveTaskToDifferentTaskList(targettedTaskList : string)
  {
    if(targettedTaskList == 'todo' && this.toDoTasks.indexOf(this.currentSelection) == -1)
    {
      let hoverIndex = this.toDoTasks.indexOf(this.hoveringOverTask);
      this.removeDraggedTaskFromTaskList();
      this.toDoTasks.splice(hoverIndex, 0, this.currentSelection);
      this.addPlaceholderTask();
    }
    if(targettedTaskList == 'doing' && this.doingTasks.indexOf(this.currentSelection) == -1)
    {
      let hoverIndex = this.doingTasks.indexOf(this.hoveringOverTask);
      this.removeDraggedTaskFromTaskList();
      this.doingTasks.splice(hoverIndex, 0, this.currentSelection);
      this.addPlaceholderTask();
    }
    if(targettedTaskList == 'done' && this.doneTasks.indexOf(this.currentSelection) == -1)
    {
      let hoverIndex = this.doneTasks.indexOf(this.hoveringOverTask);
      this.removeDraggedTaskFromTaskList();
      this.doneTasks.splice(hoverIndex, 0, this.currentSelection);
      this.addPlaceholderTask();
    }
  }

  private removeDraggedTaskFromTaskList()
  {    
    switch (this.takenFromList) {
      case 'todo':
        this.toDoTasks = this.toDoTasks.filter(x => x !== this.currentSelection);
        break;
        case 'doing':
        this.doingTasks = this.doingTasks.filter(x => x !==  this.currentSelection);
        break;
        case 'done':
        this.doneTasks = this.doneTasks.filter(x => x !==  this.currentSelection);
        break;
    }
  }

  public removeSelectedTaskFromTaskList(task: string, taskList: Array<string>)
  {    
      if(taskList === this.toDoTasks)
      {
        this.toDoTasks = this.toDoTasks.filter(x => x !== task);
        if(this.toDoTasks.length == 0)
        {
          this.toDoTasks.push(this.emptyTaskListText);
        }
      }
      if(taskList === this.doingTasks)
      {
        this.doingTasks = this.doingTasks.filter(x => x !== task);
        if(this.doingTasks.length == 0)
        {
          this.doingTasks.push(this.emptyTaskListText);
        }
      } 
      if(taskList === this.doneTasks)
      {
        this.doneTasks = this.doneTasks.filter(x => x !== task);
        if(this.doneTasks.length == 0)
        {
          this.doneTasks.push(this.emptyTaskListText);
        }
      } 
  }

  private addPlaceholderTask()
  {
    if(this.toDoTasks.length > 0)
    {
      this.toDoTasks = this.toDoTasks.filter(x => x !== this.emptyTaskListText);
    }

    if(this.toDoTasks.length == 0)
    {
      this.toDoTasks.push(this.emptyTaskListText);
    }

    if(this.doingTasks.length > 0)
    {
      this.doingTasks = this.doingTasks.filter(x => x !== this.emptyTaskListText);
    }

    if(this.doingTasks.length == 0)
    {
      this.doingTasks.push(this.emptyTaskListText);
    }

    if(this.doneTasks.length > 0)
    {
      this.doneTasks = this.doneTasks.filter(x => x !== this.emptyTaskListText);
    }

    if(this.doneTasks.length == 0)
    {
      this.doneTasks.push(this.emptyTaskListText);
    }
  }
}