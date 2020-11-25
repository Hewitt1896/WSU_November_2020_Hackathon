import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GAMECOLUMNS, PARS } from 'src/app/shared/const/const';
import { MatTableDataSource } from '@angular/material/table';
import { GameDomainService } from '../../../../core/services/domain-service/game-domain.service';
import { User } from 'firebase';
import { UpdateGameService } from '../../../../core/services/emit/update-game.service';
import { GameStats } from 'src/app/model/model';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {

  gameColumns = GAMECOLUMNS;
  pars = PARS;
  dataSource: MatTableDataSource<any>;

  public _toggleScore: boolean;
  public _dataArray: any[];
  public gameStats: GameStats = {};

  @Output() outputPlayers = new EventEmitter<User[]>();

  @Input() index: number;

  @Input()
  public get toggleScore(): boolean {
    return this._toggleScore;
  }

  public set toggleScore(taggleValue: boolean) {
    this._toggleScore = taggleValue;
  }

  @Input()
  public get dataArray(): any[] {
    return this._dataArray;
  }
  public set dataArray(value: any[]) {
    this._dataArray = value;
    this.dataSource = new MatTableDataSource(this._dataArray);
  }

  constructor(
    private updateGameService: UpdateGameService
  ) { }

  ngOnInit(): void {

  }

  public submit(): void {
    this.gameStats.index = this.index;
    this.gameStats.users = this._dataArray;
    this.updateGameService.emitGameStats(this.gameStats);
  }
}