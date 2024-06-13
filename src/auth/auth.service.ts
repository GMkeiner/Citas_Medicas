import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { AuthRegisterDto } from './dto/auth-register.dto';



@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async signUp(authRegisterDto: AuthRegisterDto){

    const { username, email, password } = authRegisterDto;

    const userAuth = await this.userRepository.create({username,email,password});

    return await this.userRepository.save(userAuth);
  }
}
