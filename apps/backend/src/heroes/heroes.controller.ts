import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HeroesService } from './Heroes.service';

@Controller('Heroes')
export class HeroesController {
	constructor(private readonly heroesService: HeroesService) {}

	@Post()
	create(@Body() createHeroDto: CreateHeroDto) {
		return this.heroesService.create(createHeroDto);
	}

	@Get()
	findAll() {
		return this.heroesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.heroesService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
		return this.heroesService.update(+id, updateHeroDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.heroesService.remove(+id);
	}
}
