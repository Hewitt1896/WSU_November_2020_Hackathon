import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main-menu.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule { }
