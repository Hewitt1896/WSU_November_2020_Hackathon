import { Injectable, Output, EventEmitter } from '@angular/core';
import { User, GameStats } from 'src/app/model/model';

@Injectable({
  providedIn: 'root'
})
export class UpdateGameService {

  @Output() sendGameStats: EventEmitter<GameStats> = new EventEmitter();

  emitGameStats(tabIndex: GameStats): void {
    this.sendGameStats.emit(tabIndex);
  }
}
