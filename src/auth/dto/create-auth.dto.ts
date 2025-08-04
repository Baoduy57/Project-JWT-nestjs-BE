import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'email không được để trống nhá mày' })
  email: string;

  @IsNotEmpty({ message: 'password không được để trống nhá mày' })
  password: string;

  @IsOptional()
  name: string;
}

export class CodeAuthDto {
  @IsNotEmpty({ message: '_id không được để trống nhá mày' })
  _id: string;

  @IsNotEmpty({ message: 'code không được để trống nhá mày' })
  code: string;
}
