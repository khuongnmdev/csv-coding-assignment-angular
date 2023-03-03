import { Component, OnInit } from '@angular/core';
import { BackendService, Task, User } from '../backend.service';
import { EMPTY, Observable, iif } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { shareReplay, switchMap, switchMapTo } from 'rxjs/operators';

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

  constructor(
    activatedRoute: ActivatedRoute,
    private backend: BackendService
  ) {
    const taskId = activatedRoute.snapshot.paramMap.get(TASK_ID_PARAM_KEY);
    this.task$ = this.backend.task(Number(taskId)).pipe(
      shareReplay({ refCount: true, bufferSize: 1 }),
    );

    this.user$ = this.task$.pipe(switchMap(task => iif(() => task.assigneeId !== null,
      this.backend.user(Number(task.assigneeId),
      ))))

  }

  ngOnInit() {
  }

}
