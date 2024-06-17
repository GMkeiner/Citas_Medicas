import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { AuthRegisterDto } from './dto/auth-register.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  
  async signUp(authRegisterDto: AuthRegisterDto){
    const { username, email, password } = authRegisterDto;

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

        // console.log('salt', salt);
        // console.log('hash', hash);

    const userAuth = await this.userRepository.create({username, email, password: hashPassword});

        //  console.log(userAuth);
        //  return 'Hola'

    const getUser = await this.userRepository.findOne({
      where: {
        email
      }
    })
    if ( getUser ) throw new ConflictException('Email already exists');

    return await this.userRepository.save(userAuth);
  }
}
