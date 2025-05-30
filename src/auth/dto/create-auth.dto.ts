import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'username không được để trống nhá mày' })
  username: string;

  @IsNotEmpty({ message: 'password không được để trống nhá mày' })
  password: string;
}
