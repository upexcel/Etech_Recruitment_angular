import { Route } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CoreComponent } from './modules/core/core.component';

export const routes: Route[] = [{
    path: '',
    redirectTo: 'core',
    pathMatch: 'full'
},
{
    path: 'core',
    component: CoreComponent
},
{
    path: 'login',
    component: LoginComponent
}
];


