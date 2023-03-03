import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, finalize, repeatWhen, tap } from 'rxjs/operators';
import { BackendService, Task } from '../backend.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // tasks = this.backend.tasks();
  users = this.backend.users();

  protected readonly tasks$: Observable<Task[]>;

  protected readonly isLoading$ = new BehaviorSubject<boolean>(false);

  private readonly userUpdated$ = new Subject<void>();

  protected description: string;

  constructor(private backend: BackendService) {
    this.tasks$ = this.backend.tasks().pipe(
      repeatWhen(() => this.userUpdated$), // Deprecated operator
    )
  }

  ngOnInit() {
  }

  protected addNewTask() {
    this.backend.newTask({ description: this.description }).pipe(
      tap(() => this.isLoading$.next(true)),
      finalize(() => this.isLoading$.next(false)),
    ).subscribe((value) => {
      this.userUpdated$.next(); // trigger reload list
      this.description = ''; // clear input
    })
  }
}
