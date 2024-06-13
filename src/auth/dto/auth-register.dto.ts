import { IsEmail, IsString, Matches, MinLength } from "class-validator";


export class AuthRegisterDto {

    id: number;

    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(5) // minimo de caracteres
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Password is too weak' }) // para que nuestro password sea mas fuerte

    password: string;
}