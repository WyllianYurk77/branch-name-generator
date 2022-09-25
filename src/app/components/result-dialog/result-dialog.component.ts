import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponentService } from './../shared-component-service';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent implements OnInit {

  btnClass: string = 'copy';
  btnName: string = 'Copiar';

  constructor(public sharedComponentService: SharedComponentService, @Inject(MAT_DIALOG_DATA) public name: string) {
    this.sharedComponentService.getData().subscribe(name =>{
      this.name = name;
    });
  }

  ngOnInit(): void {
  }

  updateButtonClass() {
    this.btnClass = 'copied';
    this.btnName = 'Copiado!';
  }
}
