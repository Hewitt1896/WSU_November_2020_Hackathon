import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { MainMenuComponent } from './main-menu.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { EditGameComponent } from './game/edit-game/edit-game.component';


const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent, canActivate: [AuthGuard]
  },
  {
    path: 'edit-course/:id',
    component: EditCourseComponent, canActivate: [AuthGuard]
  },
  {
    path: 'edit-game/:id',
    component: EditGameComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule { }
