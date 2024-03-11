import { Routes } from '@angular/router';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: UserDetailsComponent},
    { path: 'user/:id', component: UserComponent}
];

