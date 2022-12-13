import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  // Injeção de dependência
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule { }
