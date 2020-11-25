import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    slideInAnimation,
  ]
})
export class GameComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {
  }

}
