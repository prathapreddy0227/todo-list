import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit{
  
  AssignedTo!: string;
  Status!: string;
  DueDate!: Date;
  Priority!: string;
  Comments!: string;

  constructor(private route: ActivatedRoute,private router:Router) { }
  
  cancelTask() {
    this.router.navigate(['taskList'])
  }

  ngOnInit(){
    this.route.params.subscribe(
      params => {
        this.AssignedTo = params['AssignedTo'];
        this.Status = params['Comments'];
        this.DueDate = params['DueDate'];
        this.Priority = params['Priority'];
        this.Comments = params['Comments'];
        }
      )
  }
}
