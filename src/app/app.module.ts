import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdCheckboxModule, MdSidenavModule, MdIconModule, MdProgressSpinnerModule } from '@angular/material';

import { ImapMailsService } from './service/imapemails.service';
import { routes } from './app.routes';

import { LoginComponent } from './modules/login/login.component';
import { CoreComponent } from './modules/core/core.component';
import { InboxComponent } from './modules/core/inbox/inbox.component';
import { DashboardComponent } from './modules/core/dashboard/dashboard.component';
import { UserActivityLogComponent } from './modules/core/useractivitylog/useractivitylog.component';
import { SettingComponent } from './modules/core/setting/setting.component';
import { ChangePasswordComponent } from './modules/core/changepassword/changepassword.component';
import { ImapServerComponent } from './modules/core/setting/imap-server/imap-server.component';
import { SmtpServerComponent } from './modules/core/setting/smtp-server/smtp-server.component';
import { EmailTemplatesComponent } from './modules/core/setting/email-templates/email-templates.component';
import { EmailVariablesComponent } from './modules/core/setting/email-variables/email-variables.component';
import { TagSettingComponent } from './modules/core/setting/tag-setting/tag-setting.component';
import { ActionsComponent } from './modules/core/setting/actions/actions.component';
import { ManageUsersComponent } from './modules/core/setting/manage-users/manage-users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoreComponent,
    InboxComponent,
    DashboardComponent,
    UserActivityLogComponent,
    SettingComponent,
    ChangePasswordComponent,
    ImapServerComponent,
    SmtpServerComponent,
    EmailTemplatesComponent,
    EmailVariablesComponent,
    TagSettingComponent,
    ActionsComponent,
    ManageUsersComponent,
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
    MdProgressSpinnerModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ImapMailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
