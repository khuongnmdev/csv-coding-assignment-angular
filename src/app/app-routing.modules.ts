import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskDetailComponent, TASK_ID_PARAM_KEY } from "./task-detail/task-detail.component";

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: `detail/:${TASK_ID_PARAM_KEY}`, component: TaskDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }