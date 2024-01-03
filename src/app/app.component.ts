import { Component } from '@angular/core';

import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
}