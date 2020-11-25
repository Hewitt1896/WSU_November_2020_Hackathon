import { User, Course } from 'src/app/model/model';
import { ChangeDetectorRef, Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseForm } from 'src/app/shared/base-form/base-form';
import { PARS } from 'src/app/shared/const/const';

import { GameDomainService } from '../../../../core/services/domain-service/game-domain.service';
import { UpdateGameService } from '../../../../core/services/emit/update-game.service';
import { Game, GameStats } from '../../../../model/model';
import { ConfirmComponent } from './../../../../shared/components/snack-bar/confirm/confirm.component';
import { calculateTotal } from 'src/app/shared/utils/score.util';
import { UserDomainService } from 'src/app/core/services/domain-service/user-domain.service';
import { CourseDomainService } from 'src/app/core/services/domain-service/course-domain.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerComponent } from './dialog/add-player/add-player.component';
import { AddCourseComponent } from './dialog/add-course/add-course.component';
import { filterCoursePlayers } from 'src/app/shared/utils/players.util';
import { filterCourses } from 'src/app/shared/utils/courses.util';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent extends BaseForm implements OnInit {

  scoreToggle = 'Score';
  isToggled = true;

  thisGame: Game;
  id: string;
  index = 0;
  pars = PARS;
  players: User[] = [];
  courses: Course[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
    public userDomainService: UserDomainService,
    public courseDomainService: CourseDomainService,
    private activatedRoute: ActivatedRoute,
    private updateGameService: UpdateGameService,
    public gameDomainService: GameDomainService,
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
  ) {
    super(formBuilder, changeDetectorRef);

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const tmpGames = this.gameDomainService.getMyGames();
    this.thisGame = tmpGames[this.id];
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.players = this.userDomainService.getAllUsers();
    this.courseDomainService.getCourses().subscribe(data => {
      this.courses = data;
    });

    this.updateGameService.sendGameStats.subscribe((data: GameStats) => {
      this.thisGame.courses[data.index].players = calculateTotal(data.users);
      this.updateGame(this.thisGame);
    });
  }

  public updateGame(game: Game): void {
    this.thisGame.players.forEach((thisGameplayer, thisGameindex) => {
      let total = 0;
      this.thisGame.courses.forEach(course => {
        total += course.players.find(coursePlayer => coursePlayer.email === thisGameplayer.email).score.total;
      });
      this.thisGame.players[thisGameindex].total = total;
    });
    this.router.navigateByUrl('main-menu');
    this.gameDomainService.updateGame(this.thisGame).subscribe(data => {
      this.gameDomainService.fetchGames();
      this.toastConfirm('You have successfully updated the game');
    });
  }

  public promptPlayerDialog(): void {
    const coursePlayers = filterCoursePlayers(this.thisGame.players, this.players);
    const dialogRef = this.dialog.open(AddPlayerComponent,
      {
        data: {
          players: coursePlayers
        }
      });
    dialogRef.afterClosed().subscribe(result => {
      result.forEach(element => {
        this.thisGame.players.push(element);
      });
      result.forEach(player => {
        player.score = {};
        player.score.hole1 = 0;
        player.score.hole2 = 0;
        player.score.hole3 = 0;
        player.score.hole4 = 0;
        player.score.hole5 = 0;
        player.score.hole6 = 0;
        player.score.hole7 = 0;
        player.score.hole8 = 0;
        player.score.hole9 = 0;
        player.score.hole10 = 0;
        player.score.hole11 = 0;
        player.score.hole12 = 0;
        player.score.hole13 = 0;
        player.score.hole14 = 0;
        player.score.hole15 = 0;
        player.score.hole16 = 0;
        player.score.hole17 = 0;
        player.score.hole18 = 0;
        player.score.total = 0;
        this.thisGame.courses.forEach(course => {
          result.forEach(element => {
            course.players.push(element);
          });
        });
        this.updateGame(this.thisGame);
      });
    });
  }

  public promptCourseDialog(): void {
    const tmpCourses = filterCourses(this.thisGame.courses, this.courses);
    const dialogRef = this.dialog.open(AddCourseComponent,
      {
        data: {
          courses: tmpCourses
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      result.forEach(element => {
        this.thisGame.courses.push(element);
      });
      const tmpPlayers = this.thisGame.players;
      tmpPlayers.forEach(player => {
        player.score = {};
        player.score.hole1 = 0;
        player.score.hole2 = 0;
        player.score.hole3 = 0;
        player.score.hole4 = 0;
        player.score.hole5 = 0;
        player.score.hole6 = 0;
        player.score.hole7 = 0;
        player.score.hole8 = 0;
        player.score.hole9 = 0;
        player.score.hole10 = 0;
        player.score.hole11 = 0;
        player.score.hole12 = 0;
        player.score.hole13 = 0;
        player.score.hole14 = 0;
        player.score.hole15 = 0;
        player.score.hole16 = 0;
        player.score.hole17 = 0;
        player.score.hole18 = 0;
        player.score.total = 0;
      });

      this.thisGame.courses[this.thisGame.courses.length - 1].players = tmpPlayers;
      this.updateGame(this.thisGame);
    });
  }

  public toastConfirm(message: string): void {
    this.snackBar.openFromComponent(ConfirmComponent, {
      data: message,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  public changeScoreToggle(): void {
      this.isToggled = !this.isToggled;
      if (this.isToggled) {
        this.scoreToggle = 'Score';
      } else {
        this.scoreToggle = 'Putt';
      }
  }
}
