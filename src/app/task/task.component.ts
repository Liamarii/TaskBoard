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
  disabled: boolean = true;
  button: any;

  remove() {
    this.deleted.emit(true);
  }

  edit(element: any) {
    element.textContent = this.disabled ? 'cancel' : 'edit';
    this.disabled = !this.disabled;
  }
}
