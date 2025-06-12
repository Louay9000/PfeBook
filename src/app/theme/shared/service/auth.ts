import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../models/AuthenticationResponse';
import { User } from '../models/User';
import { jwtDecode } from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private http:HttpClient , private router : Router) { }

private baseUrl = 'http://localhost:8085';


  isAuthenticated : boolean=false;
  username:any;
  accessToken!:any;
  refreshToken!:any;
  UserRole! : any ;
  userId!:any;
  lastname:any;
  firstname:any;



  isAdmin(): boolean {
    // Vérifiez si l'utilisateur est authentifié et s'il a le rôle ADMIN
    return this.isAuthenticated=true && this.UserRole === 'ADMIN';
  }


  isAuthenticatedUser(): boolean {
    // Vérifiez si l'utilisateur est authentifié
    return this.isAuthenticated;
  }


  isManager(): boolean {
    // Vérifiez si l'utilisateur est authentifié et s'il a le rôle MANAGER
    return this.isAuthenticated=true && this.UserRole === 'MANAGER';
  }


  isEmployee(): boolean {
    // Vérifiez si l'utilisateur est authentifié et s'il a le rôle EMPLOYEE
    return this.isAuthenticated=true && this.UserRole === 'EMPLOYEE';
  }



  login(user: User): Observable<AuthenticationResponse> {
  let options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  }
  return this.http.post<AuthenticationResponse>(`${this.baseUrl}/login`, user, options);
}





    logout() {
this.isAuthenticated=false;
this.accessToken=undefined;
this.refreshToken=undefined;
this.username=undefined;
this.UserRole=undefined;
this.userId=undefined;
this.lastname=undefined;
this.firstname=undefined;
window.localStorage.removeItem("accessToken")
window.localStorage.removeItem("refreshToken")
window.localStorage.removeItem("id")
  }


loadProfile(){
  this.isAuthenticated=true;
  console.log(this.isAuthenticated);
  this.accessToken = localStorage.getItem('accessToken');
  console.log(this.accessToken);
  let decodedJwt:any =  jwtDecode(this.accessToken);
  this.username=decodedJwt.sub;
  this.UserRole=decodedJwt.role;
  this.userId=decodedJwt.id;
  this.lastname=decodedJwt.lastname;
  this.firstname=decodedJwt.firstname;

  }





}
