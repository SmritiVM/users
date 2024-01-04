import { Component } from '@angular/core';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [UserDetailsComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
}