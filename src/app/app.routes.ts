import { Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    {path: 'user-details', component: UserDetailsComponent},
    {path: 'user/:id', component: UserComponent},
    {path: 'user-form', component: UserFormComponent}
];
