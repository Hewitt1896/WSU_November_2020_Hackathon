import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuRoutingModule } from './main-menu-routing.module';
import { MainMenuComponent } from './main-menu.component';
import { SharedModule } from '../../shared/shared.module';
import { CourseComponent } from './course/course.component';
import { AccountComponent } from './account/account.component';
import { GameModule } from './game/game.module';
import { CourseModule } from './course/course.module';


@NgModule({
  declarations: [MainMenuComponent, AccountComponent],
  imports: [
    CommonModule,
    CourseModule,
    GameModule,
    SharedModule,
    MainMenuRoutingModule
  ]
})
export class MainMenuModule { }
