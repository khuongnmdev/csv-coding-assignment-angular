import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { TaskListComponent } from "./task-list/task-list.component";

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}