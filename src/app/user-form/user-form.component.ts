import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { User } from '../user';
import { Address } from '../user';
import { Geo } from '../user';
import { Company } from '../user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
            CommonModule,
            FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  user: User = {} as User;
  // 
  // user =  new User(0, '', '', '', {}, '', '', {});
  // let geo_:  Geo = {
  //       lat: '',
  //       lng: '',
  // }
  // let address_ : Address = {
  //     street: '',
  //     suite: '',
  //     city: '',
  //     zipcode: '',
  //     geo: this.geo_,
  // }

  // company_ = (): Company => ({
  //     name: '',
  //     catchPhrase: '',
  //     bs: '',
  // })
  // user = (): User => ({
  //   id: 0,
  //   name: '',
  //   username: '',
  //   email: '',
  //   address: this.address_,
  //   phone: '',
  //   website: '',
  //   company: this.company_,
  // }) 
  // user: User[] = [];
  // let user:  User = {};
  
  submitted = false;
  onSubmit() {this.submitted = true;
  console.log(this.user.name);
  console.log(this.user.username);
  console.log(this.user.email);
  console.log(this.user.phone);
  console.log(this.user.website);
  // console.log(this.user.address.street);
  

  }

}
