import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pacientes } from '../interfaces/pacientes';

@Injectable({
  providedIn: 'root'
})
export class ServFormularioPacientesService {
  HttpUploadOptions = {
		headers: new HttpHeaders({ Accept: 'application/json' }),
	};
  constructor(private httpcliente:HttpClient) { }
  
  //El metodo post requiere dos parametros, la URL y el contenido, 
  //en este caso la url la obtenemos del archivo environment, donde hacemos referencia al hostname (localhost) y el puerto (3000),
  //el resto de la direccion (/crearpaciente) es segun los metodos que definamos en backend.js
  //los headers como httpUploadOptions son opcionales
  public addPaciente(nuevoPaciente: Pacientes):Observable<any> {       
    return this.httpcliente.post<Pacientes>(environment.hostname+":"+environment.puerto+'/crearpaciente', nuevoPaciente,this.HttpUploadOptions);  
  }


  public getPacientes(idPaciente:number):Observable<any>{
    return this.httpcliente.get(environment.hostname+":"+environment.puerto+'/pacientes/'+idPaciente); 
  };

  public getPacientesTodos():Observable<any>{
		return this.httpcliente.get(environment.hostname+":"+environment.puerto+'/pacientes/'); 
	};


  public delPaciente(idPaciente:number):Observable<any>{
		return this.httpcliente.delete(environment.hostname+":"+environment.puerto+'/eliminar/'+idPaciente); 
	};

  
}
