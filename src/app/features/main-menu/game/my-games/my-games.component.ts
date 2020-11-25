import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/model';
import { GameDomainService } from '../../../../core/services/domain-service/game-domain.service';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {

  myGames: Game[] = [];

  constructor(
    private gameDomainService: GameDomainService
  ) { }

  ngOnInit(
  ): void {
    this.myGames = this.gameDomainService.getMyGames();
  }

}
