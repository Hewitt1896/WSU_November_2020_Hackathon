import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SignupDialogComponent],
  imports: [
    SharedModule
  ],
  entryComponents: [
    SignupDialogComponent
  ]
})
export class CoreModule { }
