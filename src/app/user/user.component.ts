import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  // user: User | undefined;
  // id: number = 2;
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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ){}

  ngOnInit(): void {
      this.getUser();
  }

  getUser(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.userService.fetchUser(id).subscribe(user => this.user = user);

  }


}
