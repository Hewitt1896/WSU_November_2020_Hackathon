import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { BaseForm } from 'src/app/shared/base-form/base-form';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerDialogData, User } from 'src/app/model/model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent extends BaseForm implements OnInit {

  addPlayers: User[] = [];

  public playerControl(): AbstractControl {
    return this.formGroup.get('playerCtrl');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PlayerDialogData,
    public dialogRef: MatDialogRef<AddPlayerComponent>,
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef
  ) {
    super(formBuilder, changeDetectorRef);
  }


  ngOnInit(): void {
    super.ngOnInit();

    this.formGroup = this.formBuilder.group({
      playerCtrl: [''],
    });
  }
  public addPlayer(playerName: string): void {
    if (playerName !== '' && playerName !== undefined) {
      this.addPlayers.push(this.data.players.find(dataPlayer => dataPlayer.displayName === playerName));
      this.data.players.splice(this.data.players.findIndex(dataPlayer => dataPlayer.displayName === playerName), 1);
      console.log("AddPlayerComponent -> addPlayer -> this.addPlayer", this.addPlayers)
      this.playerControl().setValue('');
    }
  }
  public submit(): void {
    this.dialogRef.close(this.addPlayers);

  }
}
