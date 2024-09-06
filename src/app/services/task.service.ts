import { Injectable, OnInit } from '@angular/core';
import { ITask } from '../task-interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList: ITask[] = []
  constructor() { }

  getTasks(): ITask[] {
    this.taskList = [
      {
        AssignedTo: "User 1",
        Status: "Completed",
        DueDate: new Date('12/10/2024'),
        Priority: "low",
        Comments: "This task is good"
      },
      {
        AssignedTo: "User 2",
        Status: "In Progress",
        DueDate: new Date('9/9/2024'),
        Priority: "high",
        Comments: "This task is good"
      },
      {
        AssignedTo: "User 3",
        Status: "Completed",
        DueDate: new Date('12/10/2024'),
        Priority: "low",
        Comments: "This task is good"
      },
      {
        AssignedTo: "User 1",
        Status: "Completed",
        DueDate: new Date('12/10/2024'),
        Priority: "low",
        Comments: "This task is good"
      },
      {
        AssignedTo: "User 1",
        Status: "Completed",
        DueDate: new Date('12/10/2024'),
        Priority: "low",
        Comments: "This task is good"
      }
    ]
    return this.taskList;
  }
}
