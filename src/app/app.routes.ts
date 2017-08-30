import { Route } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CoreComponent } from './modules/core/core.component';

import { InboxComponent } from './modules/inbox/inbox.component';
import { EmailLogsComponent } from './modules/email-logs/email-logs.component';
import { UserActivityLogComponent } from './modules/useractivitylog/useractivitylog.component';
import { SettingComponent } from './modules/setting/setting.component';
import { ChangePasswordComponent } from './modules/changepassword/changepassword.component';

import { ImapServerComponent } from './modules/imap-server/imap-server.component';
import { SmtpServerComponent } from './modules/smtp-server/smtp-server.component';
import { EmailTemplatesComponent } from './modules/email-templates/email-templates.component';
import { EmailVariablesComponent } from './modules/email-variables/email-variables.component';
import { TagSettingComponent } from './modules/tag-setting/tag-setting.component';
import { ActionsComponent } from './modules/actions/actions.component';
import { ManageUsersComponent } from './modules/manage-users/manage-users.component';
import { LoginRouteGuard } from './service/login-route-guard';
import { ForgetPasswordComponent } from './modules/forget-password/forget-password.component';
import { ResetPasswordComponent } from './modules/reset-password/reset-password.component';
import { EmailModalComponent } from './modules/email-modal/email-modal.component';
import { AutomaticTagComponent } from './modules/automatic-tag/automatic-tag.component';
import { JobProfileTagComponent } from './modules/job-profile-tag/job-profile-tag.component';
import { AddNewUserComponent } from './modules/add-new-user/add-new-user.component';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const routes: Route[] = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
    {
        path: 'core',
        component: CoreComponent,
        canActivate: [LoginRouteGuard],
        children: [{
            path: '',
            redirectTo: 'inbox',
            pathMatch: 'full'
        },
            {
                path: 'inbox',
                component: InboxComponent,
                canActivate: [LoginRouteGuard],
                children: [{
                    path: 'email/:id',
                    pathMatch: 'full',
                    component: EmailModalComponent
                }]
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [LoginRouteGuard]
            }, {
                path: 'setting',
                component: SettingComponent,
                canActivate: [LoginRouteGuard],
                children: [{
                    path: '',
                    redirectTo: 'imap',
                    pathMatch: 'full'
                }, {
                    path: 'imap',
                    component: ImapServerComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'smtp',
                    component: SmtpServerComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'emailtemplate',
                    component: EmailTemplatesComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'emailvariable',
                    component: EmailVariablesComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'tagsetting',
                    component: TagSettingComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'action',
                    component: ActionsComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'manageuser',
                    component: ManageUsersComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'automaticTags',
                    component: AutomaticTagComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'jobProfileTags',
                    component: JobProfileTagComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'resetPassword',
                    component: ResetPasswordComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'usersList',
                    component: UsersListComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'useractivity',
                    component: UserActivityLogComponent,
                    canActivate: [LoginRouteGuard]
                }, {
                    path: 'emailLogs',
                    component: EmailLogsComponent,
                    canActivate: [LoginRouteGuard]
                }]
            }, {
                path: 'changepassword',
                component: ChangePasswordComponent,
                canActivate: [LoginRouteGuard]
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forgot',
        component: ForgetPasswordComponent
    }
];
