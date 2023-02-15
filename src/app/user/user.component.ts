import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserRepository } from '../models/user-repository';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent 
{
   createUsers:User ;
   users:User[]= [];
   userRepository= UserRepository;


  constructor(private userService:UserService)
  {
    this.signin();
  }

  signin()
  {

  }
}
