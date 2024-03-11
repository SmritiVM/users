import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';

import { Address } from '../user';
import { Company } from '../user';
import { Geo } from '../user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  id: number = 2;
  geo: Geo = {
    lat: '',
    lng: ''
  }

  address: Address = {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: this.geo
  }

  company: Company = {
    name: '',
    catchPhrase: '',
    bs: ''
  }

  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: this.address,
    phone: '',
    website: '',
    company: this.company
  }

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.fetchUser(this.id)
      .subscribe(data => {
        this.user  = data;
      })
  }


}
