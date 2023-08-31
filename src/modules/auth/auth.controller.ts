import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { isPublic } from 'src/shared/decorators/isPublic';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('authentication')
@Controller('auth')
@isPublic()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Realiza o login de um usuário e retorna um auth token.',
  })
  @ApiResponse({
    status: 201,
    description: 'Signin succesfull.',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @ApiOperation({
    summary: 'Cadastra um novo usuário e retorna um auth token.',
  })
  @ApiResponse({
    status: 201,
    description: 'Signup succesfull.',
  })
  @ApiResponse({
    status: 409,
    description: 'This email is already in use.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
