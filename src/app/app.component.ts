import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [UserDetailsComponent, UserFormComponent, UserComponent, CommonModule,
  RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: any;
  
}