import { SharedComponentService } from './../shared-component-service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './../result-dialog/result-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

branchName:any;
name: string;

  constructor(public dialog: MatDialog, public sharedComponentService: SharedComponentService) {
    this.name = '';
   }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(): void {
    this.branchName = new FormGroup({
      number: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      keywordOne: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
      keywordTwo: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
      keywordThree: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
      keywordFour: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')])
    });
  }

  buildBranchName(): void {
    let num = this.branchName.get('number').value;
    let keyOne = this.branchName.get('keywordOne').value;
    let keyTwo = this.branchName.get('keywordTwo').value;
    let keyThree = this.branchName.get('keywordThree').value;
    let keyFour = this.branchName.get('keywordFour').value;
    let concat = `trf-SIGEDUC-${num}-${keyOne.toLowerCase()}-${keyTwo.toLowerCase()}-${keyThree.toLowerCase()}`;
    if(keyFour != '') {
      concat += `-${keyFour.toLowerCase()}`;
    }
    this.name = concat.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    this.sharedComponentService.setData(this.name);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      data: this.name
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
