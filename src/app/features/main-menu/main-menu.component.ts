import { Component, OnInit } from '@angular/core';
import { NotifyTabService } from '../../core/services/emit/notify-tab.service';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  selectedIndex = 0;
  constructor(
    private notifyTabService: NotifyTabService
  ) { }

  ngOnInit(): void {

    this.notifyTabService.sendTabIndex.subscribe(data => {
      this.selectedIndex = data;
    })
  }
}
