import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  header: string = "";
  title = "//TODO:"

  constructor(private data : HeaderService){}

  public createTask(taskContent: string)
  {
    this.data.changeMessage(taskContent);
    this.header = '';
  }
}