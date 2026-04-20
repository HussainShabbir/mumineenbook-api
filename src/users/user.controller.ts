import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.schema';

@Controller('registeredUser')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() body: User) {
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
