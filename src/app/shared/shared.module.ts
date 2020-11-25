import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/snack-bar/confirm/confirm.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ParTableComponent } from './components/table/par-table/par-table.component';
import { RouterModule } from '@angular/router';
import { PlayersTableComponent } from './components/table/players-table/players-table.component';
import { CourseTableComponent } from './components/table/course-table/course-table.component';
import { GameTableComponent } from './components/table/game-table/game-table.component';



@NgModule({
  declarations: [ConfirmComponent, ParTableComponent, PlayersTableComponent, CourseTableComponent, GameTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ParTableComponent,
    PlayersTableComponent,
    CourseTableComponent,
    GameTableComponent,
    RouterModule
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ]
})
export class SharedModule { }
