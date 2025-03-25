import { IsNotEmpty, IsString } from "class-validator";

export class verifyUserDto {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    otp: string;
}