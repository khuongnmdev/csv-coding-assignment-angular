import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = this.backend.tasks();
  users = this.backend.users();

  constructor(private backend: BackendService) {}

  ngOnInit() {
  }

}
