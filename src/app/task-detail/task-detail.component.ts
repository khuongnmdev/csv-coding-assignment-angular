import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, shareReplay, switchMap } from 'rxjs/operators';
import { BackendService, Task, User } from '../backend.service';

export const TASK_ID_PARAM_KEY = 'taskId';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  protected task: Task;

  private taskId: number;

  public readonly form: FormGroup;

  protected isLoaded$ = new BehaviorSubject<boolean>(false);

  protected readonly users$: Observable<User[]>;

  constructor(
    activatedRoute: ActivatedRoute,
    private readonly backend: BackendService,
    private readonly fb: FormBuilder,
    private snackBar: MatSnackBar

  ) {
    this.taskId = Number(activatedRoute.snapshot.paramMap.get(TASK_ID_PARAM_KEY));

    this.users$ = this.backend.users().pipe(
      shareReplay({ refCount: true, bufferSize: 1 }),
    );

    this.form = this.initForm();

  }

  ngOnInit() {
    this.backend.task(this.taskId).pipe(
      first(),
    ).subscribe((value) => {
      if (value) {
        this.form.patchValue(value);
        this.isLoaded$.next(true);
      }
    }
    );
  }

  updateTask() {
    of(this.form.value).pipe(
      switchMap((payload) => {
        return this.backend.update(this.taskId, payload);
      })
    ).subscribe(() => {
      this.snackBar.open("Updated new value!")
    })
  }

  private initForm(): FormGroup {
    return this.fb.group({
      id: [0],
      description: ['', [Validators.required]],
      assigneeId: ['', [Validators.required]],
      completed: [false, Validators.required],
    });
  }
}
