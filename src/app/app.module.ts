import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    TaskListComponent,
    PageHeaderComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TaskListComponent, PageHeaderComponent]
})
export class AppModule { }
