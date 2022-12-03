export interface Pacientes {
    id: number;
    nombre: string;
    rut: string;
    mails: string;
    phoneNumber: number;
    msg: string;
    type: string;
}


export let ListaPacientes:Array<Pacientes> = [
    {
        id:123,
        nombre:"asdf",
        rut:"1234",
        mails:"asdfasd@asdfasd.cl",
        phoneNumber:12345678,
        msg:"asdfasd",
        type:"asdfasd"
    }
    

]
