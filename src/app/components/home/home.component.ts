import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './../result-dialog/result-dialog.component';
import { SharedComponentService } from './../shared-component-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  branchName:any;
  name: string;

  constructor(public dialog: MatDialog, public sharedComponentService: SharedComponentService, private fb: FormBuilder) {
    this.name = '';
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.branchName = this.fb.group({
      number: ['', [Validators.required, Validators.maxLength(5)]],
      keywordOne: ['', [Validators.required]],
      keywordTwo: ['', [Validators.required]],
      keywordThree: ['', [Validators.required]],
      keywordFour: ['']
    });
  }

  buildBranchName(): void {
    if(!this.validateFields()) {
      let concat = `trf-SIGEDUC-${this.number}-${this.keyOne.toLowerCase()}-${this.keyTwo.toLowerCase()}-${this.keyThree.toLowerCase()}`;
      if(this.keyFour != '') {
        concat += `-${this.keyFour.toLowerCase()}`;
      }
      this.name = concat.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      this.sharedComponentService.setData(this.name);
      this.openDialog();
    } else {
      this.branchName.markAllAsTouched();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      data: this.name
    });
    dialogRef.afterClosed().subscribe(() => {
      this.branchName.reset();
      this.createForm();
    });
  }

  validateFields(): boolean {
    if(this.number == '') {
      return true
    }
    if(this.keyOne == '') {
      return true
    }
    if(this.keyTwo == '') {
      return true
    }
    if(this.keyThree == '') {
      return true
    }

    return false;
  }

  get number() { return this.branchName.get('number').value; }

  get keyOne() { return this.branchName.get('keywordOne').value; }

  get keyTwo() { return this.branchName.get('keywordTwo').value; }

  get keyThree() { return this.branchName.get('keywordThree').value; }

  get keyFour() { return this.branchName.get('keywordFour').value; }

  set number(number: any) { this.number = number; }

  set keyOne(keyOne: any) { this.keyOne = keyOne; }

  set keyTwo(keyTwo: any) { this.keyTwo = keyTwo; }

  set keyThree(keyThree: any) { this.keyThree = keyThree; }

  set keyFour(keyFour: any) { this.keyFour = keyFour; }

}
