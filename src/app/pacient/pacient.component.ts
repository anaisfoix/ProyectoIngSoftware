import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Form,Validators} from '@angular/forms';
import Swal, {SweetAlertOptions} from 'sweetalert2';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {
  contactForm:FormGroup;
  
  constructor(private fb:FormBuilder) {
    this.contactForm=this.fb.group(
      { nombre:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-z A-Z]*')]],
        rut:['',[Validators.required,Validators.pattern('[0-9 -]*')]],
        mails:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('[0-9]*')]],
        msg:['',[Validators.required]],
        type:['',[Validators.required]]
      });
   }

   ExitoFormulario(){
    if(this.contactForm.valid){
      Swal.fire({
        title: 'Exito',
        text: 'Su hora se a inscrito con exito recuerde llegar 10 minutos antes para comprar los bonos',
        icon: 'success'
      });
    }
    if(this.nombre.errors.required){
      Swal.fire({
        title: 'Error',
        text: 'Falta un nombre que ingresar',
        icon: 'error',
        position: 'bottom-end'
      });
    }

    if(this.nombre.errors.pattern){
      Swal.fire({
        title: 'Error',
        text: 'Ingrese letras validas',
        icon: 'error',
        position: 'bottom-end'
      });
    }
    if(this.nombre.errors){
      Swal.fire({
        title: 'Error',
        text: 'Ingrese almenos 3 letras',
        icon: 'error',
        position: 'bottom-end'
      });
    }

  if(this.rut.errors.required){
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un rut',
      icon: 'error',
      position: 'bottom-end'
    });
  }
  if(this.rut.errors.pattern){
    Swal.fire({
      title: 'Error',
      text: 'Ingrese formato numeros validos',
      icon: 'error',
      position: 'bottom-end'
    });
  }
  if(this.mails.errors.required){
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un mail',
      icon: 'error',
      position: 'bottom-end'
    });
  }
  if(this.mails.errors.email){
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un mail valido',
      icon: 'error',
      position: 'bottom-end'
    });
  }
  if(this.phone.errors.required){
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un numero de telefono',
      icon: 'error',
      position: 'bottom-end'
    });
  }
  if(this.phone.errors){
    Swal.fire({
      title: 'Error',
      text: 'Ingrese 8 numeros',
      icon: 'error',
      position: 'bottom-end'
    });
  }

  if(this.phone.errors.pattern){
    Swal.fire({
      title: 'Error',
      text: 'Ingrese numeros validos',
      icon: 'error',
      position: 'bottom-end'
    });
  }
  if(this.msg.errors.required){
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un mensaje',
      icon: 'error',
      position: 'bottom-end'
    });
  }
  if(this.type.errors.required){
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un tipo de consulta',
      icon: 'error',
      position: 'bottom-end'
    });
  }

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
