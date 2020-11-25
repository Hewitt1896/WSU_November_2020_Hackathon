import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [GameComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    GameComponent,
  ],
  entryComponents: [
  ]
})
export class GameModule { }
