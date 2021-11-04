import { Module } from '@nestjs/common';
import { AuthModule } from '@tradist/auth';
import { CoreModule } from '@tradist/core';
import { HeroesModule } from '../Heroes/heroes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [CoreModule, AuthModule, HeroesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
