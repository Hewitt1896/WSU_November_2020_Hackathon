import { PLAYERCOLUMNS } from './../../../const/const';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Par } from 'src/app/model/model';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.scss']
})
export class PlayersTableComponent implements OnInit {

  playerColumns = PLAYERCOLUMNS;

  dataSource: MatTableDataSource<any>;

  // tslint:disable-next-line: variable-name
  public _dataArray: Par[];

  @Input()
  public get dataArray(): Par[] {
    return this._dataArray;
  }
  public set dataArray(value: Par[]) {
    this._dataArray = value;
    this.dataSource = new MatTableDataSource(this._dataArray);
  }
  ngOnInit(): void {

  }
}
