import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  user: User;

  constructor() {
    this.user = new User(
      'Patrick',
      48,
      "j'apprécie les fruits au sirop !",
      'https://picsum.photos/400/300'
    );
  }

  clear() {
    this.user.citation = '';
  }
}
