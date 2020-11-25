import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { SharedModule } from '../../../shared/shared.module';
import { GameHistoryComponent } from './game-history/game-history.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { AddPlayerComponent } from './edit-game/dialog/add-player/add-player.component';
import { AddCourseComponent } from './edit-game/dialog/add-course/add-course.component';



@NgModule({
  declarations: [GameComponent,
    CreateGameComponent,
    EditGameComponent,
    JoinGameComponent,
    GameHistoryComponent,
    MyGamesComponent,
    AddPlayerComponent,
    AddCourseComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    GameComponent,
    CreateGameComponent,
    EditGameComponent,
    JoinGameComponent,
    GameHistoryComponent,
    MyGamesComponent
  ],
  entryComponents: [
    AddPlayerComponent,
    AddCourseComponent
  ]
})
export class GameModule { }
