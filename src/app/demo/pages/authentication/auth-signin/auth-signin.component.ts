import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Role } from 'src/app/theme/shared/models/Role';
import { User } from 'src/app/theme/shared/models/User';
import { Auth } from 'src/app/theme/shared/service/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [HttpClientModule,RouterModule,FormsModule,CommonModule,CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule
  ],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export default class AuthSigninComponent implements OnInit {
    user: User ={
    id: 0,
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    role: Role.ADMIN || Role.MANAGER || Role.EMPLOYEE
  }

  constructor(private auth : Auth , private router :Router  ) { }
  ngOnInit(): void {
  }



login(){
if (this.user.username && this.user.password) {
      this.auth.login(this.user).subscribe(response => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.auth.loadProfile();
        //this.router.navigate(['/dashboard']);
        //reload apres 2.5 secondes
        this.router.navigateByUrl("/dashboard");
        setTimeout(() => {
          window.location.reload();
        }, 1500);


      }, error => {
        console.error('Erreur lors de la connexion de l\'admin:', error);
      }
    );
}
}


}
