import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    quantity: number;

    @IsNumber()
    @IsOptional()
    minimumStock: number; // Para notificações de estoque baixo

    @IsString()
    @IsOptional()
    location: string; // Localização no estoque
}
