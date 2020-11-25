import { Component, OnInit } from '@angular/core';
import { GameDomainService } from '../../../../core/services/domain-service/game-domain.service';
import { Game, User } from 'src/app/model/model';
import { UserDomainService } from '../../../../core/services/domain-service/user-domain.service';
import { ConfirmComponent } from 'src/app/shared/components/snack-bar/confirm/confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifyTabService } from 'src/app/core/services/emit/notify-tab.service';


@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {

  thisPlayer: User;
  ongoingGames: Game[] = [];
  constructor(
    private snackBar: MatSnackBar,
    public notifyTabService: NotifyTabService,
    private gameDomainService: GameDomainService,
    private userDomainService: UserDomainService
  ) {
  }

  ngOnInit(): void {
    this.ongoingGames = this.gameDomainService.getAllOngoingGames();
  }
  public joinGame(index: number): void {
    this.thisPlayer = this.userDomainService.getThisUser();
    this.ongoingGames[index].players.push(this.thisPlayer);
    this.thisPlayer.score = {};
    this.thisPlayer.score.hole1 = 0;
    this.thisPlayer.score.hole2 = 0;
    this.thisPlayer.score.hole3 = 0;
    this.thisPlayer.score.hole4 = 0;
    this.thisPlayer.score.hole5 = 0;
    this.thisPlayer.score.hole6 = 0;
    this.thisPlayer.score.hole7 = 0;
    this.thisPlayer.score.hole8 = 0;
    this.thisPlayer.score.hole9 = 0;
    this.thisPlayer.score.hole10 = 0;
    this.thisPlayer.score.hole11 = 0;
    this.thisPlayer.score.hole12 = 0;
    this.thisPlayer.score.hole13 = 0;
    this.thisPlayer.score.hole14 = 0;
    this.thisPlayer.score.hole15 = 0;
    this.thisPlayer.score.hole16 = 0;
    this.thisPlayer.score.hole17 = 0;
    this.thisPlayer.score.hole18 = 0;
    this.thisPlayer.score.total = 0;
    this.ongoingGames[index].courses.forEach(course => {
      course.players.push(this.thisPlayer);
    });
    this.notifyTabService.emitTab(0);
    this.gameDomainService.updateGame(this.ongoingGames[index]).subscribe(data => {
      this.gameDomainService.fetchGames();
      this.toastConfirm('You have successfully joined the game');
    });
  }

  public toastConfirm(message: string): void {
    this.snackBar.openFromComponent(ConfirmComponent, {
      data: message,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    });
  }
}
