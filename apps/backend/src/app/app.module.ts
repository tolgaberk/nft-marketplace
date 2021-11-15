import { Module } from '@nestjs/common';
import { AuthModule } from '@tradist/auth';
import { CoreModule } from '@tradist/core';
import { FileManagerModule } from '@tradist/file-manager';
import { HeroesModule } from '../heroes/heroes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [CoreModule, AuthModule, HeroesModule, FileManagerModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
