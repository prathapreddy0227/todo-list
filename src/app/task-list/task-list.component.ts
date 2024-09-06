import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ITask } from '../task-interfaces/task';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  list: ITask[] = []

  constructor(private _service: TaskService,private router:Router) {
  }
  
  ngOnInit() {
    this.list = this._service.getTasks();
  }
  addNewTask() {
    this.router.navigate(['addTask'])
  }
  editTask(item: ITask) {
    this.router.navigate(['editTask',item])
  }
}
