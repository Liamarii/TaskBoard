import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private messageSource = new ReplaySubject<string>();
  currentMessage = this.messageSource.asObservable();

  getMessage(message: string) {
    this.messageSource.next(message);
  }
}
