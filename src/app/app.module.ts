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
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdSnackBarModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
} from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {
    AppComponent
} from './app.component';
import {
    RouterModule
} from '@angular/router';
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
    EmailLogsComponent
} from './modules/email-logs/email-logs.component';
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
    httpFactory
} from './service/http.factory';
import {
    InterceptedHttp
} from './service/http.interceptor';
import {
    SmtpComponentFormComponent
} from './modules/smtp-component-form/smtp-component-form.component';
import {
    SlackComponentFormComponent
} from './modules/slack-component-form/slack-component-form.component';
import {
    AddEmailTempComponent
} from './modules/add-email-temp/add-email-temp.component';
import {
    AddNewSpamContactComponent
} from './modules/add-spam-contact/add-spam-contact.component';
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
import { ResetPasswordComponent } from './modules/reset-password/reset-password.component';
import { ComposeEmailComponent } from './modules/compose-email/compose-email.component';
import { ScheduleInterviewComponent } from './modules/schedule-interview/schedule-interview.component';
import { AddNewUserComponent } from './modules/add-new-user/add-new-user.component';
import { FetchEmailByDayComponent } from './modules/fetch-email-by-day/fetch-email-by-day.component';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { SpamComponent } from './modules/spam/spam.component';
import { CreateQuestionComponent } from './modules/createQuestion/createQuestion.component';
import { ConfirmationDialogComponent } from './modules/confirmation-dialog/confirmation-dialog.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CronStatusModelComponent } from './modules/cron-status-model/cron-status-model.component';
import { AddNoteComponent } from './modules/add-note/add-note.component';
import { SlackInfoComponent } from './modules/slack-info/slack-info.component';
import { CommonService } from './service/common.service';
import { LocalStorageService } from './service/local-storage.service';
import { DialogService } from './service/dialog.service';
import { DashboardService } from './service/dashboard.service';
import { AvatarDirectiveDirective } from './service/avatar-directive.directive';
import { SpamDialogService } from './service/spamDialog.service';
import { AddSubTagModalComponent } from './modules/add-sub-tag-modal/add-sub-tag-modal.component';
import { EmailTrackingComponent } from './modules/email-tracking/email-tracking.component';
import { DragulaModule } from 'ng2-dragula';
import { RlTagInputModule } from 'angular2-tag-input';
import { AddCandidateComponent } from './modules/add-candidate/add-candidate.component';
import { IntervieweeInboxComponent } from './modules/interviewee-inbox/interviewee-inbox.component';
import { IntervieweeCandidateComponent } from './modules/interviewee-candidate/interviewee-candidate.component';
import { ViewNoteComponent } from './modules/view-note/view-note.component';
import { AddQuestionDialogComponent } from './modules/addQuestionDialog/addQuestionDialog.component';
import { CandidateComponent } from './modules/candidate/candidate.component';
import { InterviewQuestionComponent } from './modules/interviewQuestion/interviewQuestion.component';
import { PreviewAnswerComponent } from './modules/previewAnswer/previewAnswer.component';
import { VerifyCandidateComponent } from './modules/verifyCandidate/verifyCandidate.component';
import { CandidateScoreComponent } from './modules/candidateScore/candidateScore.component';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CoreComponent,
        InboxComponent,
        EmailLogsComponent,
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
        ResetPasswordComponent,
        AddNewUserComponent,
        FetchEmailByDayComponent,
        UsersListComponent,
        SpamComponent,
        ScheduleInterviewComponent,
        ConfirmationDialogComponent,
        DashboardComponent,
        AvatarDirectiveDirective,
        CronStatusModelComponent,
        AddNoteComponent,
        SlackInfoComponent,
        SlackComponentFormComponent,
        AddSubTagModalComponent,
        EmailTrackingComponent,
        AddCandidateComponent,
        IntervieweeInboxComponent,
        IntervieweeCandidateComponent,
        AddNewSpamContactComponent,
        ViewNoteComponent,
        CreateQuestionComponent,
        AddQuestionDialogComponent,
        CandidateComponent,
        InterviewQuestionComponent,
        PreviewAnswerComponent,
        VerifyCandidateComponent,
        CandidateScoreComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        MdButtonModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdCheckboxModule,
        MdSidenavModule,
        MdIconModule,
        MdDialogModule,
        MdProgressSpinnerModule,
        MdSnackBarModule,
        RouterModule.forRoot(routes, { useHash: true }),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CKEditorModule,
        MdDatepickerModule,
        MdNativeDateModule,
        ChartsModule,
        DragulaModule,
        RlTagInputModule
    ],
    providers: [
        ImapMailsService,
        LoginService,
        CommonService,
        LocalStorageService,
        DialogService,
        SpamDialogService,
        DashboardService,
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
        CronStatusModelComponent,
        OpenattachementComponent,
        ScheduleInterviewComponent,
        AddNewUserComponent,
        FetchEmailByDayComponent,
        ConfirmationDialogComponent,
        AddNoteComponent,
        AddSubTagModalComponent,
        AddCandidateComponent,
        AddNewSpamContactComponent,
        ViewNoteComponent,
        AddQuestionDialogComponent,
        PreviewAnswerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
