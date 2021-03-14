import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { User } from "src/modules/user/entities/user.entity";
import { MainRoad, PropertyType } from "../enums";

@ApiTags('x')
export class CreateAddressDto {
    
    @ApiProperty({
        enum: MainRoad,
        description: "Tipo de vía principal",
        example: 'calle'
    })
    mainRoad: MainRoad;

    @ApiProperty({
        description: "Número de la vía principal",
        example: '15'
    })
    numberMainRoad: number;

    @ApiProperty({
        description: "Número de la vía secundaria",
        example: '23'
    })
    sideLine: number;

    @ApiProperty({
        description: "Número del sitio de destino",
        example: '104'
    })
    site: number;

    fullAddress?: string;

    neighborhood?: string;

    @ApiProperty({
        enum: PropertyType,
        description: "Tipo de propiedad",
        example: 'casa'
    })
    propertyType: PropertyType;

    @ApiProperty({
        required: false,
        minLength: 6,
        maxLength: 10,
        example: '3131313131'
    })
    phone?: string;

    @ApiProperty({
        example: 'Jhon Doe'
    })
    personName: string;

    @ApiProperty({
        type: User,
        description: "Objeto User con el Id de Usuario o Comercio a quien pertenece",
        example: { id: 1, email: 'example@freedeal.com' }
    })
    owner: Partial<User>;
}