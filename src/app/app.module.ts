import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'bootstrap/dist/css/bootstrap.css'
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app-routing.module';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent, TaskListComponent, TaskFormComponent, NewTaskComponent, EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
