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
    MdDialogModule,
    MdSnackBarModule
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
    AutomaticTagComponent
} from './modules/automatic-tag/automatic-tag.component';
import {
    JobProfileTagComponent
} from './modules/job-profile-tag/job-profile-tag.component';
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
import {
    SmtpComponentFormComponent
} from './modules/smtp-component-form/smtp-component-form.component';
import {
    AddEmailTempComponent
} from './modules/add-email-temp/add-email-temp.component';
import { AddTagModalComponent } from './modules/add-tag-modal/add-tag-modal.component';
import { EmailModalComponent } from './modules/email-modal/email-modal.component';
import { SafeHtmlPipe } from './service/safe-html-pipe.pipe';
import { SafeUrlPipe } from './service/safe-url.pipe';
import { CKEditorModule } from 'ng2-ckeditor';
import { SingleTemplateComponent } from './modules/single-template/single-template.component';
import { TemplateEditComponent } from './modules/template-edit/template-edit.component';
import { AddVarComponent } from './modules/add-var/add-var.component';
import { EditVariableComponent } from './modules/edit-variable/edit-variable.component';
import { TestTemplateComponent } from './modules/test-template/test-template.component';
import { SetvaremailpreviewComponent } from './modules/setvaremailpreview/setvaremailpreview.component';
import { OpenattachementComponent } from './modules/openattachement/openattachement.component';
import { ForgetPasswordComponent } from './modules/forget-password/forget-password.component';
import { ComposeEmailComponent } from './modules/compose-email/compose-email.component';
import { ScheduleInterviewComponent } from './modules/schedule-interview/schedule-interview.component';


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
        AutomaticTagComponent,
        JobProfileTagComponent,
        ActionsComponent,
        ManageUsersComponent,
        InboxSideNavComponent,
        EmailboxComponent,
        ImapComponentFormComponent,
        ManualTagModalComponent,
        AutomaticTagModalComponent,
        AutomaticTagModalComponent,
        AddTagModalComponent,
        EmailModalComponent,
        SafeHtmlPipe,
        SafeUrlPipe,
        SmtpComponentFormComponent,
        AddEmailTempComponent,
        ComposeEmailComponent,
        SingleTemplateComponent,
        TemplateEditComponent,
        AddVarComponent,
        EditVariableComponent,
        TestTemplateComponent,
        SetvaremailpreviewComponent,
        OpenattachementComponent,
        ForgetPasswordComponent,
        ScheduleInterviewComponent
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
        MdSnackBarModule,
        RouterModule.forRoot(routes, { useHash: true }),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CKEditorModule
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
        AutomaticTagModalComponent,
        AddTagModalComponent,
        EmailModalComponent,
        AddEmailTempComponent,
        ComposeEmailComponent,
        TemplateEditComponent,
        AddVarComponent,
        EditVariableComponent,
        TestTemplateComponent,
        SetvaremailpreviewComponent,
        OpenattachementComponent,
        ScheduleInterviewComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
