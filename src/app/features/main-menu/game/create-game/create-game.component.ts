import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmComponent } from './../../../../shared/components/snack-bar/confirm/confirm.component';
import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { BaseForm } from 'src/app/shared/base-form/base-form';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Course, Game, User } from 'src/app/model/model';
import { UserDomainService } from '../../../../core/services/domain-service/user-domain.service';
import { CourseDomainService } from '../../../../core/services/domain-service/course-domain.service';
import { GameDomainService } from '../../../../core/services/domain-service/game-domain.service';
import { Router } from '@angular/router';
import { NotifyTabService } from 'src/app/core/services/emit/notify-tab.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateGameComponent extends BaseForm implements OnInit {

  thisGame: Game = {};
  players: User[] = [];
  courses: Course[] = [];
  addPlayers: User[] = [];
  addCourses: Course[] = [];

  public nameControl(): AbstractControl {
    return this.formGroup.get('nameCtrl');
  }
  public courseControl(): AbstractControl {
    return this.formGroup.get('courseCtrl');
  }
  public playerControl(): AbstractControl {
    return this.formGroup.get('playerCtrl');
  }
  constructor(
    public userDomainService: UserDomainService,
    public courseDomainService: CourseDomainService,
    public router: Router,
    public notifyTabService: NotifyTabService,
    public gameDomainService: GameDomainService,
    protected formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    protected changeDetectorRef: ChangeDetectorRef,
  ) {
    super(formBuilder, changeDetectorRef);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.players = this.userDomainService.getAllUsers();
    this.courseDomainService.getCourses().subscribe(data => {
      this.courses = data;
    });

    this.formGroup = this.formBuilder.group({
      nameCtrl: ['', [Validators.required]],
      courseCtrl: [''],
      playerCtrl: ['']
    });
  }

  public addPlayer(playerName: string): void {
    if (playerName !== '' && playerName !== undefined) {
      this.addPlayers.push(this.players.find(player => player.displayName === playerName));
      this.players.splice(this.players.findIndex(player => player.displayName === playerName), 1);
      this.playerControl().setValue('');
    }
  }
  public addCourse(course: Course): void {
    if (course.name !== '' && course.name !== undefined) {
      this.addCourses.push(this.courses.find(course => course.name === course.name));
      this.courses.splice(this.courses.findIndex(course => course.name === course.name), 1);
      this.courseControl().setValue('');
    }
  }

  public submit(): void {
    if (!this.formGroup.invalid) {
      if (this.addCourses.length !== 0 && this.addPlayers.length !== 0 && this.nameControl().value !== '') {

        this.notifyTabService.emitTab(0);
        this.thisGame.players = this.addPlayers;
        this.thisGame.courses = this.addCourses;
        this.thisGame.players.forEach(player => {
          player.total = 0;
        })
        this.thisGame.courses.forEach(course => {
          course.players = this.addPlayers;
          course.players.forEach(player => {
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
        });
        this.thisGame.name = this.nameControl().value;
        this.thisGame.ongoing = true;
        this.gameDomainService.saveGame(this.thisGame).subscribe((data) => {
          this.toastMessage('You have successfully created a game');
          this.gameDomainService.fetchGames();
        });
      } else {
        this.toastMessage('Error: Missing fields to create game')
      }
    }
  }
  public toastMessage(message: string): void {
    this.snackBar.openFromComponent(ConfirmComponent, {
      data: message,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
