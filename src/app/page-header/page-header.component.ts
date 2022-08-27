import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent {
  header: string = "";
  title = "//TODO:"

  constructor(private data : TaskService){}

  public createTask(taskContent: string)
  {
    this.data.changeMessage(taskContent);
    this.header = '';
  }
}