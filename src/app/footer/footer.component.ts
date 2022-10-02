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
    if(this.mailForm.valid){
      Swal.fire({
        title: 'Exito',
        text: 'Esta inscrito a nuestra base de datos de correos desde ahora le llegaran mails de informacion de nuestros productos',
        icon: 'success'
      });
    }
    if(this.mail.errors.email){
      Swal.fire({
        title: 'Error',
        text: 'El mail ingresado no es correcto',
        icon: 'error',
        position: 'bottom-end'
      });
    }
    if(this.mail.errors.required){
      Swal.fire({
        title: 'Error',
        text: 'Falta un mail que ingresar',
        icon: 'error',
        position: 'bottom-end'
      });
    }
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
