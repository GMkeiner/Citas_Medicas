import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('pacientes')
@UsePipes(new ValidationPipe())
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post() 
  create(@Body() createPacienteDto: CreatePacienteDto) {
    // console.log(createPacienteDto);
    return this.pacientesService.create(createPacienteDto);
  }

  // @Get()
  // findAll(@Query() query: string): any  {
  //   console.log(query)
  //   return this.pacientesService.findAll();
  // }

  @Get()
  async findAll()  {
    const data = await this.pacientesService.findAll();
    return {
      message: 'Peticion Correcta',
      data: data
    }
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePacienteDto: UpdatePacienteDto) {
    return this.pacientesService.update(+id, updatePacienteDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pacientesService.remove(+id);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.pacientesService.remove(+id);
    return {
      message: 'Paciente Eliminado',
      data: data
    }
  }
}
