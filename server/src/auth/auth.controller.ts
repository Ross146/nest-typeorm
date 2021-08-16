import {Body, Controller, HttpException, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserCreateDto} from "@user/dto/userCreate.dto";
import {RegistrationStatus} from "./interfaces/registrationStatus.interface";
import {UserLoginDto} from "@user/dto/userLogin.dto";
import {LoginStatus} from "./interfaces/loginStatus.interface";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    ) {}

  @Post('register')
  public async register(@Body() createUserDto: UserCreateDto,  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(createUserDto,);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('login')
  public async login(@Body() loginUserDto: UserLoginDto): Promise<LoginStatus> {
    return await this.authService.login(loginUserDto);
  }
}
