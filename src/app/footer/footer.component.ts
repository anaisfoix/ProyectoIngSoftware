import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Form,Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mailForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.mailForm=this.fb.group(
      { mail:['',[Validators.required,Validators.email]]
      });
   }

  ngOnInit(): void {
  }
  
  get mail(): any {return this.mailForm.get('mail');}
}
