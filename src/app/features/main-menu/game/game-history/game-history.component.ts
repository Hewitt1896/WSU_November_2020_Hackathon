import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/model';
import { ActivatedRoute } from '@angular/router';
import { GameDomainService } from 'src/app/core/services/domain-service/game-domain.service';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent implements OnInit {

  completedGames: Game[] = [];
  constructor(
    private route: ActivatedRoute,
    public gameDomainService: GameDomainService
  ) {
    this.gameDomainService.fetchGames();
  }

  ngOnInit(): void {
    this.completedGames = this.gameDomainService.getCompletedGames();
  }
}
