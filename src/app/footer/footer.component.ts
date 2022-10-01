import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Form,Validators} from '@angular/forms';
import Swal, {SweetAlertOptions} from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mailForm:FormGroup;
  
  ExitoMail(){
    Swal.fire({
      title: 'Exito',
      text: 'Esta inscrito a nuestra base de datos de correos desde ahora le llegaran mails de informacion de nuestros productos',
      icon: 'success'
    });
  }

  constructor(private fb:FormBuilder) {
    this.mailForm=this.fb.group(
      { mail:['',[Validators.required,Validators.email]]
      });
   }

  ngOnInit(): void {
  }
  
  get mail(): any {
    return this.mailForm.get('mail');
  }

  
}
