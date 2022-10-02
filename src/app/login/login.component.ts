import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  navigatetopatient(){
    this.route.navigateByUrl('/pacient');{
    }
  }

  navigatetodoctor(){
    this.route.navigateByUrl('/doctor');{
    }
  }

}
