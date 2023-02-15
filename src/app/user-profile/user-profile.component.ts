import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  {
  user: User;
  displayAge: boolean = true
  constructor() {
    this.user = new User(
      'John',
      'Doe',
      48,
      "j'apprécie les fruits au sirop !",
      'https://picsum.photos/400/300'
    );
  }

  clear() {
    this.user.quote = '';
  }
}