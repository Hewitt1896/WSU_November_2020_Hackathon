import { Component, OnInit } from '@angular/core';
import { NotifyTabService } from '../../core/services/emit/notify-tab.service';
import { MatTabGroup } from '@angular/material/tabs';
import { GameDomainService } from 'src/app/core/services/domain-service/game-domain.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  selectedIndex = 0;
  constructor(
    public gameDomainService: GameDomainService,
    private notifyTabService: NotifyTabService
  ) { }

  ngOnInit(): void {
    this.gameDomainService.fetchGames();

    this.notifyTabService.sendTabIndex.subscribe(data => {
      this.selectedIndex = data;
    })
  }
}
