import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TaskBoardComponent } from './taskBoard/taskBoard.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HeaderService } from './header/header.service';
import { taskListComponent } from './taskList/taskList.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    TaskBoardComponent,
    HeaderComponent,
    taskListComponent,
    TaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TaskBoardComponent, HeaderComponent, HeaderService],
  bootstrap: [HeaderComponent, TaskBoardComponent],
})
export class AppModule {}
