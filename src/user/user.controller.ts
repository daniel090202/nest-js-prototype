import { Controller, UseGuards, Get, Req } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard) // defines which guard to use and what kind of guard
@Controller('user')
export class UserController {
    @Get('me')
    getMe(@GetUser() user: User) {
        
        return user;
    }
}
