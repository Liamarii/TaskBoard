import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public Header: string = '';
  public Title = '//TODO:';

  constructor(private _headerService: HeaderService) {}

  public createTask(taskContent: string) {
    this._headerService.changeMessage(taskContent);
    this.Header = '';
  }
}
