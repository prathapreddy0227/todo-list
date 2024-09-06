import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  {path:'taskList',component:TaskListComponent},
  { path: 'addTask', component: NewTaskComponent },
  { path: 'editTask', component: EditTaskComponent },
  {path:'**',component:TaskListComponent}
]

export const routing:
  ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);