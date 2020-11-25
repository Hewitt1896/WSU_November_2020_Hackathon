import { ConfirmComponent } from './../../../shared/components/snack-bar/confirm/confirm.component';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BaseForm } from 'src/app/shared/base-form/base-form';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AGE } from 'src/app/shared/const/const';
import { UserDomainService } from '../../../core/services/domain-service/user-domain.service';
import { User } from 'src/app/model/model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent extends BaseForm implements OnInit {

  thisUser: User;
  ages = AGE;

  public displayNameControl(): AbstractControl {
    return this.formGroup.get('displayNameCtrl');
  }

  public handicapControl(): AbstractControl {
    return this.formGroup.get('handicapCtrl');
  }

  public emailControl(): AbstractControl {
    return this.formGroup.get('emailCtrl');
  }

  public photoUrlControl(): AbstractControl {
    return this.formGroup.get('photoUrlCtrl');
  }

  public titleControl(): AbstractControl {
    return this.formGroup.get('titleCtrl');
  }

  public ageControl(): AbstractControl {
    return this.formGroup.get('ageCtrl');
  }

  constructor(
    public userDomainService: UserDomainService,
    protected formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    protected changeDetectorRef: ChangeDetectorRef,
  ) {
    super(formBuilder, changeDetectorRef);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.thisUser = this.userDomainService.getThisUser();

    this.formGroup = this.formBuilder.group({
      displayNameCtrl: [this.thisUser.displayName, [Validators.required]],
      emailCtrl: [this.thisUser.email, [Validators.required, Validators.email]],
      photoUrlCtrl: [this.thisUser.photoUrl, [Validators.required]],
      titleCtrl: [this.thisUser.title, [Validators.required]],
      ageCtrl: [this.thisUser.age, [Validators.required]],
      handicapCtrl: [this.thisUser.handicap, [Validators.required]],
    });
  }
  public submit(): void {
    if (!this.formGroup.invalid) {
      this.thisUser.userId = this.thisUser.userId;
      this.thisUser.displayName = this.displayNameControl().value;
      this.thisUser.email = this.thisUser.email;
      this.thisUser.photoUrl = this.photoUrlControl().value;
      this.thisUser.title = this.titleControl().value;
      this.thisUser.age = this.ageControl().value;
      this.thisUser.handicap = this.handicapControl().value;
      this.userDomainService.updateUser(this.thisUser).subscribe(() => {
        this.toastConfirm('You have successfully updated your profile');
      });
    }
  }
  public toastConfirm(message: string): void {
    this.snackBar.openFromComponent(ConfirmComponent, {
      data: message,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
