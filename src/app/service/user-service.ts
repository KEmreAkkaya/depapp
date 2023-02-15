import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable()
export class UserService
{
   public url:string = "https://ng-app-32877-default-rtdb.firebaseio.com/";

   constructor(private http:HttpClient)
   {
    
   }
   public getUsers(): Observable<User[]>
   {
    return this.http.get<User[]>(this.url+"users.json");
                                    
   }
 

   getRequestforUsersById(id:string):Observable<User>
   {
    return this.http.get<User>(this.url+"users/"+id+".json");
   }


   postRequestforUsers(user:User):Observable<User>
   {
    return this.http.post<User>(this.url+"users.json",user);                                
   }
}