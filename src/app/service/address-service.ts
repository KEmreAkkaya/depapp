import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Address } from "../models/address";

@Injectable()
export class AddressService
{
   public url:string = "https://ng-app-32877-default-rtdb.firebaseio.com/";

   constructor(private http:HttpClient)
   {
    
   }
   public getAddresses(): Observable<Address[]>
   {
    return this.http.get<Address[]>(this.url+"addresses.json");
                                    
   }

   postRequestforAdresses(address:Address):Observable<Address>
   {
    return this.http.post<Address>(this.url+"addresses.json",address);                                
   }
}