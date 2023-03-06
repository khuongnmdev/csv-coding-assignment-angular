import { Component, OnInit } from '@angular/core';
import { BackendService, Task, User } from '../backend.service';
import { EMPTY, Observable, iif } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap, switchMapTo, tap } from 'rxjs/operators';

export const TASK_ID_PARAM_KEY = 'taskId';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  /** User to display. */
  protected readonly task$: Observable<Task>;
  protected readonly user$: Observable<User>;
  protected readonly userList$: Observable<User[]>;

  private taskId: number;

  constructor(
    activatedRoute: ActivatedRoute,
    private backend: BackendService
  ) {
    this.taskId = Number(activatedRoute.snapshot.paramMap.get(TASK_ID_PARAM_KEY));
    this.task$ = this.backend.task(this.taskId).pipe(
      shareReplay({ refCount: true, bufferSize: 1 }),
    );

    this.user$ = this.task$.pipe(switchMap(task => iif(() => task.assigneeId !== null,
      this.backend.user(Number(task.assigneeId),
      ))))

    this.userList$ = this.backend.users().pipe(
      tap((users) => console.log(users)),
      shareReplay({ refCount: true, bufferSize: 1 }),
    );

  }

  ngOnInit() {
  }

  assignTask(userId: number) {

    this.task$.pipe(
      map(value => {
        return { ...value, userId: userId }
      }),
      switchMap((payload) => {
        return this.backend.update(this.taskId, payload);
      })

    ).subscribe(
      // () => console.log('Assign success!');
    )
  }

}
