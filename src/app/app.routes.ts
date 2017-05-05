import { Route } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CoreComponent } from './modules/core/core.component';

import { InboxComponent } from './modules/inbox/inbox.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
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

export const routes: Route[] = [{
    path: '',
    redirectTo: 'core',
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
                canActivate: [LoginRouteGuard]
            }, {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [LoginRouteGuard]
            }, {
                path: 'useractivity',
                component: UserActivityLogComponent,
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
                    component: ImapServerComponent
                }, {
                    path: 'smtp',
                    component: SmtpServerComponent
                }, {
                    path: 'emailtemplate',
                    component: EmailTemplatesComponent
                }, {
                    path: 'emailvariable',
                    component: EmailVariablesComponent
                }, {
                    path: 'tagsetting',
                    component: TagSettingComponent
                }, {
                    path: 'action',
                    component: ActionsComponent
                }, {
                    path: 'manageuser',
                    component: ManageUsersComponent
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
    }
];
