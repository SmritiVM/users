import { Component, OnInit, inject } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent{
  user: User | undefined;

  route: ActivatedRoute = inject(ActivatedRoute);
  userId = -1;
  constructor(private userService: UserService,){
    this.userId = Number(this.route.snapshot.params['id']);

  }

  ngOnInit(): void{
    this.userService.fetchUser(this.userId).subscribe(data => this.user = data);
  }
}
