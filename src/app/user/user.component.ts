import { Component, signal, computed, WritableSignal } from '@angular/core';
import { user } from '../interfaces/user';
import { DUMMY_USERS } from '../dummy-users';

const generateRandomIndex = () =>
  Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser: WritableSignal<user> = signal(
    DUMMY_USERS[generateRandomIndex()]
  );

  //when the selected user changes, someValue won't change
  //that's why we will use computed to properly observe the
  //selectedUser and update someValue when it changes

  // someValue = this.selectedUser().avatar;

  // someValue = computed(() => this.selectedUser().avatar);

  // get imagePath() {
  //   return `assets/users/${this.selectedUser().avatar}`;
  // }

  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  onUserClick() {
    this.selectedUser.set(DUMMY_USERS[generateRandomIndex()]);
  }
}
