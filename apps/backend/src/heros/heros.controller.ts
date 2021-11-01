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
import { HerosService } from './heros.service';

@Controller('heros')
export class HerosController {
	constructor(private readonly herosService: HerosService) {}

	@Post()
	create(@Body() createHeroDto: CreateHeroDto) {
		return this.herosService.create(createHeroDto);
	}

	@Get()
	findAll() {
		return this.herosService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.herosService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
		return this.herosService.update(+id, updateHeroDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.herosService.remove(+id);
	}
}
