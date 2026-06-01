import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import { EstadoMesa } from '../enums/estado-mesa.enum';

export class UpdateMesaDto {
  @IsInt()
  @IsOptional()
  @Min(1)
  numero?: number;

  @IsInt()
  @IsOptional()
  @Min(1)
  capacidad?: number;

  @IsEnum(EstadoMesa)
  @IsOptional()
  estado?: EstadoMesa;
}
