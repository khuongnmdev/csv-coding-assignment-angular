import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, repeatWhen } from 'rxjs/operators';
import { BackendService, Task, User } from '../backend.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  protected readonly tasks$: Observable<Task[]>;

  protected readonly users$: Observable<User[]>;

  private readonly userUpdated$ = new Subject<void>();

  protected filterValue: number;

  protected description: string;

  constructor(private backend: BackendService) {
    this.tasks$ = this.backend.tasks().pipe(
      map(tasks => {
        if (this.filterValue) {
          return tasks.filter(task => task.assigneeId === this.filterValue)
        } else {
          return tasks;
        }
      }),
      repeatWhen(() => this.userUpdated$), // Deprecated operator but still work on this version
    )
    this.users$ = this.backend.users();
  }

  getAssigneeName(assigneeId: number) {
    this.users$.pipe(
      map(users => {
        users.find(u => u.id === assigneeId)
      })
    )
  }

  protected addNewTask() {
    this.backend.newTask({ description: this.description }).pipe(
    ).subscribe((value) => {
      this.userUpdated$.next(); // trigger reload list
      this.description = ''; // clear input
    })
  }

  protected trackByFunction(index: number, task: Task) {
    return task.id;
  }

  protected filterChange(userId: number) {
    this.filterValue = userId;
    this.userUpdated$.next(); // trigger reload list
  }
}
