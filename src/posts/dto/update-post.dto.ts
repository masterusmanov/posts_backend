import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class UpdatePostDto {
    @ApiProperty({ example: 'Household appliances', description: 'Product category'})
    @IsString()
    readonly title?: string;

    @ApiProperty({ example: 'Refrigerator', description: 'Description'})
    @IsString()
    readonly content?: string;
}
