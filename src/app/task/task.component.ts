import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = new Task();
  @Output() deleted = new EventEmitter<boolean>();
  public disabled: boolean = true;

  remove() {
    this.deleted.emit(true);
  }

  edit() {
    this.disabled = !this.disabled;
  }
}
