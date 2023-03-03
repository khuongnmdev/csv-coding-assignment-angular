import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { BehaviorSubject } from 'rxjs';
import { BackendService } from '../backend.service';
import { TaskDetailComponent } from './task-detail.component';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let route: ActivatedRoute;
  const paramsSubject = new BehaviorSubject({
    taskId1: 0,
    taskId2: 111,
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: BackendService, useValue: new BackendService() },
        {
          provide: ActivatedRoute,
          useValue: {
            params: paramsSubject
          },
        },
      ]
    })
      .compileComponents();

    route = TestBed.inject(ActivatedRoute);
  }));

  it('should be zero', (done) => {
    route.params.subscribe(params => {
      expect(params.taskId1).toBe(0);
      done();
    });
  });

  it('should not be zero', (done) => {
    route.params.subscribe(params => {
      expect(params.taskId2).not.toBe(0);
      done();
    });
  });
});