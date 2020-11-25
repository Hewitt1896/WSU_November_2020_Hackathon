import { Component, OnInit } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  selectedIndex = 0;
  constructor(
  ) { }

  ngOnInit(): void {
  }
}
