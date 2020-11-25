import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  message: string;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data;
  }


  ngOnInit(): void {
  }

}
