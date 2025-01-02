import { Controller, Post, Get, Put, Delete, Body, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IdDto } from './dto/id.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './user.schema';
import { RolesGuard } from '../../guards/roles.guard';

const UserExample = {
  _id: '1',
  email: 'john.doe@example.com',
  password: 'password123',
  role: 'USER',
  regDate: new Date().toISOString(),
};

@ApiTags('users')
@Controller('users')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: User,
    examples: {
      example: {
        summary: 'Example of created user',
        value: UserExample,
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('pagination')
  @ApiOperation({ summary: 'Get all users with pagination' })
  @ApiResponse({
    status: 200,
    description: 'The users have been successfully retrieved.',
    schema: {
      example: {
        summary: 'Example of users with pagination',
        value: {
          users: [
            UserExample,
            {
              _id: '2',
              email: 'jane.doe@example.com',
              password: 'password123',
              role: 'ADMIN',
              regDate: new Date().toISOString(),
            },
          ],
          total: 2,
        },
      },
    },
  })
  async getAllUsers(@Query('limit') limit: number, @Query('offset') offset: number) {
    const [users, total] = await Promise.all([
      this.userService.findAllWithPagination(limit, offset),
      this.userService.count(),
    ]);
    return { users, total };
  }

  @Post('findId')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully retrieved.',
    type: User,
    examples: {
      example: {
        summary: 'Example of user by ID',
        value: UserExample,
      },
    },
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getUser(@Body() idDto: IdDto) {
    return this.userService.findOne(idDto.id);
  }

  @Put('update')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
    type: User,
    examples: {
      example: {
        summary: 'Example of updated user',
        value: UserExample,
      },
    },
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  async updateUser(@Body() updateUserDto: UpdateUserDto) {
    const { id, ...updateData } = updateUserDto;
    return this.userService.update(id, updateData);
  }

  @Delete('delete')
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully deleted.',
    examples: {
      example: {
        summary: 'Example of deleted user',
        value: { message: 'User deleted successfully' },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  async deleteUser(@Body() idDto: IdDto) {
    return this.userService.remove(idDto.id);
  }
}
