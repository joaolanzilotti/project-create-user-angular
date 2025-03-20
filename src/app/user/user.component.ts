import {Component, computed, signal, Signal} from '@angular/core';

import { DUMMY_USERS} from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // I have two options to update the states in angular,
  // 1 option is automatic , 2 option is using signals
  // 2 option
  selectedUser = signal(DUMMY_USERS[randomIndex]);
 imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  // 1 option
  // selectedUser = DUMMY_USERS[randomIndex];

  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser().avatar ;
  // }

  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // 2 option
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // 1 option
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }

}
