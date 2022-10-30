import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  // private _jsonURL = './doctores.json';

  // constructor(private http: HttpClient){

  // }

  // public getJson(): Observable<any>{
  //   return this.http.get(this._jsonURL);
  // }

  // doctorsitos:doctores[]=[];
  
  ngOnInit(): void {
    this
  }
  
}

// export interface doctores{
//   "Nombre":string,
//   "Especialidad":string
// }
