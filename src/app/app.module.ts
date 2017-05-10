import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {
    HttpModule,
    Http,
    XHRBackend,
    RequestOptions
} from '@angular/http';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
    MaterialModule
} from '@angular/material';
import {
    FlexLayoutModule
} from '@angular/flex-layout';
import {
    AppComponent
} from './app.component';
import {
    RouterModule
} from '@angular/router';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdDialogModule
} from '@angular/material';
import {
    ImapMailsService
} from './service/imapemails.service';
import {
    LoginService
} from './service/login.service';
import {
    routes
} from './app.routes';
import {
    LoginRouteGuard
} from './service/login-route-guard';
import {
    LoginComponent
} from './modules/login/login.component';
import {
    CoreComponent
} from './modules/core/core.component';
import {
    InboxComponent
} from './modules/inbox/inbox.component';
import {
    DashboardComponent
} from './modules/dashboard/dashboard.component';
import {
    UserActivityLogComponent
} from './modules/useractivitylog/useractivitylog.component';
import {
    SettingComponent
} from './modules/setting/setting.component';
import {
    ChangePasswordComponent
} from './modules/changepassword/changepassword.component';
import {
    ImapServerComponent
} from './modules/imap-server/imap-server.component';
import {
    SmtpServerComponent
} from './modules/smtp-server/smtp-server.component';
import {
    EmailTemplatesComponent
} from './modules/email-templates/email-templates.component';
import {
    EmailVariablesComponent
} from './modules/email-variables/email-variables.component';
import {
    TagSettingComponent
} from './modules/tag-setting/tag-setting.component';
import {
    ActionsComponent
} from './modules/actions/actions.component';
import {
    ManageUsersComponent
} from './modules/manage-users/manage-users.component';
import {
    InboxSideNavComponent
} from './modules/inbox-side-nav/inbox-side-nav.component';
import {
    EmailboxComponent
} from './modules/emailbox/emailbox.component';
import {
    ImapComponentFormComponent
} from './modules/imap-component-form/imap-component-form.component';
import {
    ManualTagModalComponent
} from './modules/manual-tag-modal/manual-tag-modal.component';
import {
    AutomaticTagModalComponent
} from './modules/automatic-tag-modal/automatic-tag-modal.component';
import {
    ColorPickerModule
} from 'ng2-color-picker';
import {
    httpFactory
} from './service/http.factory';
import {
    InterceptedHttp
} from './service/http.interceptor';


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
        InboxSideNavComponent,
        EmailboxComponent,
        ImapComponentFormComponent,
        ManualTagModalComponent,
        AutomaticTagModalComponent,
        AutomaticTagModalComponent,
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
        MdDialogModule,
        ColorPickerModule,
        MdProgressSpinnerModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        ImapMailsService,
        LoginService,
        LoginRouteGuard,
        {
            provide: InterceptedHttp,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ],
    entryComponents: [
        ManualTagModalComponent,
        AutomaticTagModalComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
