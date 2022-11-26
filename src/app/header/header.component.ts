import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  Header: string = '';
  Title = '//TODO:';

  constructor(private headerService: HeaderService) {}

  createTask(taskContent: string) {
    this.headerService.getMessage(taskContent);
    this.Header = '';
  }
}
