import { Component } from '@angular/core';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [UserDetailsComponent, UserFormComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: any;
  
}