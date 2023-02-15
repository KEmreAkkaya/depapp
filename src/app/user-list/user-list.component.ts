import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserRepository } from '../models/user-repository';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[UserService]
})
export class UserListComponent {
  users: User[] = [];
  userRepository: UserRepository;
  constructor(private route: ActivatedRoute,private userService:UserService) { 
   // this.userRepository = new UserRepository();
  }

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe(result => {
      for(const key in result) {
        this.users.push({ ...result[key], id: key });
      }
  });

        console.log(this.users);
   
}

}
