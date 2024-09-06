import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  constructor(private router:Router){}
  cancelTask() {
    this.router.navigate(['taskList'])
  }
}
