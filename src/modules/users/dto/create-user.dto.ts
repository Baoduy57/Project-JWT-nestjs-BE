import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'name không được để trống nhá mày' })
  name: string;

  @IsNotEmpty({ message: 'email không được để trống nhá mày' })
  @IsEmail({}, { message: 'email không đúng định dạng nhá mày' })
  email: string;

  @IsNotEmpty({ message: 'password không được để trống nhá mày' })
  password: string;
  phone: string;
  address: string;
  image: string;
}
