import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';

import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdIconModule} from '@angular/material';
import { ImapemailsService } from './service/imapemails.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdIconModule,
    FormsModule,
    HttpModule
  ],
  providers: [ImapemailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
