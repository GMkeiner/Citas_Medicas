import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente> 
  ){}

  async create(createPacienteDto: CreatePacienteDto){
    const createPaciente = await this.pacienteRepository.create(createPacienteDto);
    return await this.pacienteRepository.save(createPaciente);
  }

  // create(createPacienteDto: CreatePacienteDto) {
  //   console.log(createPacienteDto);
  //   return 'Hola';  
  // }

  async findAll() {
    return await this.pacienteRepository.find();
  }

  async findOne(id: number): Promise<Paciente> {
    const pacienteId = await this.pacienteRepository.findOneBy({id});
    
    if(!pacienteId) throw new NotFoundException('Paciente no encontrado con ese ID');
    return pacienteId;
    // return await this.pacienteRepository.findOneBy({id});
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return await this.pacienteRepository.update(id,updatePacienteDto)
  }

  async remove(id: number): Promise<void> {
    await this.pacienteRepository.delete(id); // se va a la base de datos y le pone una fecha al @DeleteDateColumn a este se le pasa el id
    // return await this.pacienteRepository.softRemove({id }); // A este se le pasa la instancia 
  }
}
