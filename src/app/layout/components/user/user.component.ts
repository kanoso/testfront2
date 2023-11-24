import { Component } from '@angular/core';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [
    {value: 'Héctor', viewValue: 'Hector'},
  ];

}
