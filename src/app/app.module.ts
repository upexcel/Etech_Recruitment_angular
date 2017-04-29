import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdCheckboxModule, MdSidenavModule, MdIconModule } from '@angular/material';
import { ImapMailsService } from './service/imapemails.service';
import { routes } from './app.routes';
import { LoginComponent } from './modules/login/login.component';
import { CoreComponent } from './modules/core/core.component';
import { InboxComponent } from './modules/core/inbox/inbox.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoreComponent,
    InboxComponent,
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
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ImapMailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
