import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePacienteDto {
    // @IsInt()
    // id:             number;
    @IsString()
    nombre:         string;
    @IsString()
    apellido:       string;
    @IsInt()
    identificacion: number;
    @IsNotEmpty()
    mensaje:        string;
    @IsEmail()
    correo:         string;
    @IsInt()
    Telefono:       number;
}
