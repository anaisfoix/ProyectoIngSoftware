import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Form,Validators} from '@angular/forms';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit {
  contactForm:FormGroup;
  
  constructor(private fb:FormBuilder) {
    this.contactForm=this.fb.group(
      { nombre:['',[Validators.required,Validators.minLength(3),Validators.pattern("a:z & A:Z")]],
        rut:['',[Validators.required]],
        mails:['',[Validators.required]],
        phone:['',[Validators.required]],
        msg:['',[Validators.required]],
        type:['',[Validators.required]]
      });
   }

  ngOnInit(): void {
  }
  EnviarDatos(){
     console.log("Prueba");
  }

  get nombre(): any {
    return this.contactForm.get('nombre');
  }

  get rut(): any {
    return this.contactForm.get('rut');
  }

  get mails(): any {return this.contactForm.get('mails');}

  get phone(): any {
    return this.contactForm.get('phone');
  }

  get msg(): any {
    return this.contactForm.get('msg');
  }

  get type(): any {
    return this.contactForm.get('type');
  }

}
