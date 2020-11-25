import { ConfirmComponent } from './../../shared/components/snack-bar/confirm/confirm.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserDomainService } from './domain-service/user-domain.service';
import { SignupDialogComponent } from '../components/signup-dialog/signup-dialog.component';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authState: User = null;
  private _user: Observable<User>;
  private newUser: User;
  public get user(): Observable<User> {
    return this._user;
  }

  public set user(value: Observable<User>) {
    this._user = value;
  }

  public get authState(): any {
    return this._authState;
  }

  public set authState(value: any) {
    this._authState = value;
  }

  get userData(): any {
    return [
      {
        uid: this.authState.uid,
        displayName: this.authState.displayName,
        email: this.authState.email,
        phoneNumber: this.authState.phoneNumber,
        photoUrl: this.authState.photoUrl,
        country: this.authState.country,
      },
    ];
  }

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public ngZone: NgZone,
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private snackBar: MatSnackBar,
    private userDomainService: UserDomainService
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap((user: User) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.afAuth.authState.subscribe((authState) => {
      this.authState = authState;
    });
  }

  isAuthenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : null;
  }

  // Firebase Google Sign-in
  public signinGoogle() {
    this.userDomainService.fetchUsers();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((credential) => this.ngZone.run(() => {
      if (!this.userDomainService.userExists(credential.user.email)) {
        this.openSignUpDialog(credential.user.email);
      } else {
        this.userDomainService.setUser(credential.user.email);
        this.toastConfirm('You have successfully logged in');
        this.router.navigateByUrl('main-menu');
      }
    }));
  }

  public signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigateByUrl('');
    });
  }

  public toastConfirm(message: string): void {
    this.snackBar.openFromComponent(ConfirmComponent, {
      data: message,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    });
  }
  public openSignUpDialog(userEmail: string): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      data: {
        email: userEmail
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.toastConfirm('You have successfully signed up');
      this.userDomainService.setUser(userEmail);
      this.router.navigateByUrl('main-menu');
    });
  }
}
