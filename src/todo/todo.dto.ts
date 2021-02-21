import { IsNotEmpty, minLength, MaxLength, MinLength } from 'class-validator';
export class TodoDto {
  @IsNotEmpty({ message: '$property cant be emty' })
  @MaxLength(10, { message: '"$value" is less than 10' })
  @MinLength(3, { message: '"$value"more than 3' })
  name: string;
  @IsNotEmpty({ message: '$property cant be emty' })
  @MinLength(10, { message: 'u must use 10 or mor caracter' })
  description: string;
}
