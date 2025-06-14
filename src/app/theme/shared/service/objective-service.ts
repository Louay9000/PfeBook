import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Obj } from '@popperjs/core';
import { Objective } from '../models/Objective';

@Injectable({
  providedIn: 'root'
})
export class ObjectiveService {



  constructor(private http:HttpClient , private router : Router) { }



private baseUrl = 'http://localhost:8085';


getAllObjectives() {


  return this.http.get(`${this.baseUrl}/api/objectives` );
}



AddObjective(objective: Objective) {
  return this.http.post(`${this.baseUrl}/api/objectives`, objective);
}


}
