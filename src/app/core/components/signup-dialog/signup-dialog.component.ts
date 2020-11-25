import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { AGE } from 'src/app/shared/const/const';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/shared/base-form/base-form';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignUpData, User } from 'src/app/model/model';
import { UserDomainService } from '../../services/domain-service/user-domain.service';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent extends BaseForm implements OnInit {

  thisUser: User = {};
  ages = AGE;

  public displayNameControl(): AbstractControl {
    return this.formGroup.get('displayNameCtrl');
  }

  public emailControl(): AbstractControl {
    return this.formGroup.get('emailCtrl');
  }

  public handicapControl(): AbstractControl {
    return this.formGroup.get('handicapCtrl');
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
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    private userDomainService: UserDomainService,
    @Inject(MAT_DIALOG_DATA) public data: SignUpData
  ) {
    super(formBuilder, changeDetectorRef);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.formGroup = this.formBuilder.group({
      displayNameCtrl: ['', [Validators.required]],
      emailCtrl: ['', [Validators.required, Validators.email]],
      // tslint:disable-next-line: max-line-length
      photoUrlCtrl: ['https://cdn1.iconfinder.com/data/icons/line-design-business-set-4/21/people-customer-unknown-512.png', [Validators.required],],
      titleCtrl: ['Newcomer', [Validators.required]],
      ageCtrl: ['', [Validators.required]],
      handicapCtrl: ['', [Validators.required]],
    });
  }

  public submit(): void {
    this.thisUser.displayName = this.displayNameControl().value;
    this.thisUser.email = this.data.email;
    this.thisUser.photoUrl = this.photoUrlControl().value;
    this.thisUser.title = this.titleControl().value;
    this.thisUser.age = this.ageControl().value;
    this.thisUser.handicap = this.handicapControl().value;
    this.userDomainService.saveUser(this.thisUser).subscribe(() => { });
    this.dialogRef.close();
  }
}