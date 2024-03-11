import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule
  , RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers()
      .subscribe(data => {
        this.users = data;
      });
  }
}
