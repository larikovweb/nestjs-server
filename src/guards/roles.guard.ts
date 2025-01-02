import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = 'ADMIN';
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new ForbiddenException('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1];
    const secret = this.configService.get<string>('JWT_SECRET');
    const decoded = this.jwtService.verify(token, { secret });

    if (decoded.role !== requiredRole) {
      throw new ForbiddenException('You do not have permission to access this resource');
    }

    return true;
  }
}
