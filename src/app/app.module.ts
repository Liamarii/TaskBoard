import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TaskListsContainerComponent } from './taskListsContainer/taskListsContainer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HeaderService } from './header/header.service';

@NgModule({
  declarations: [
    TaskListsContainerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskListsContainerComponent, HeaderComponent, HeaderService],
  bootstrap: [TaskListsContainerComponent, HeaderComponent]
})
export class AppModule { }
