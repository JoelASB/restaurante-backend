import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { Mesa } from './entities/mesa.entity';
import { EstadoMesa } from './enums/estado-mesa.enum';

@Injectable()
export class MesasService {
  constructor(
    @InjectRepository(Mesa)
    private mesasRepository: Repository<Mesa>,
  ) {}

  async create(createMesaDto: CreateMesaDto): Promise<Mesa> {
    const mesaExistente = await this.mesasRepository.findOne({ where: { numero: createMesaDto.numero } });
    if (mesaExistente) {
      throw new BadRequestException(`La mesa con número ${createMesaDto.numero} ya existe`);
    }
    const mesa = this.mesasRepository.create(createMesaDto);
    return await this.mesasRepository.save(mesa);
  }

  async findAll(): Promise<Mesa[]> {
    return await this.mesasRepository.find();
  }

  async findOne(id: number): Promise<Mesa> {
    const mesa = await this.mesasRepository.findOne({ where: { id } });
    if (!mesa) {
      throw new NotFoundException(`Mesa con ID ${id} no encontrada`);
    }
    return mesa;
  }

  async update(id: number, updateMesaDto: UpdateMesaDto): Promise<Mesa> {
    const mesa = await this.findOne(id);
    
    if (updateMesaDto.numero && updateMesaDto.numero !== mesa.numero) {
      const mesaExistente = await this.mesasRepository.findOne({ where: { numero: updateMesaDto.numero } });
      if (mesaExistente) {
        throw new BadRequestException(`La mesa con número ${updateMesaDto.numero} ya existe`);
      }
    }

    Object.assign(mesa, updateMesaDto);
    return await this.mesasRepository.save(mesa);
  }

  async remove(id: number): Promise<void> {
    const mesa = await this.findOne(id);
    await this.mesasRepository.remove(mesa);
  }

  async cambiarEstado(id: number, nuevoEstado: EstadoMesa): Promise<Mesa> {
    if (!Object.values(EstadoMesa).includes(nuevoEstado)) {
        throw new BadRequestException('El estado proporcionado no es válido');
    }
    const mesa = await this.findOne(id);
    mesa.estado = nuevoEstado;
    return await this.mesasRepository.save(mesa);
  }
}
