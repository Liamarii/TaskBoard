import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    TaskListComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskListComponent, PageHeaderComponent, TaskService],
  bootstrap: [TaskListComponent, PageHeaderComponent]
})
export class AppModule { }
