import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResultDialogComponent } from './components/result-dialog/result-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedComponentService } from './components/shared-component-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ClipboardModule,
    MatDialogModule
  ],
  providers: [HomeComponent, SharedComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
