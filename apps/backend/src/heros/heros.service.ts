import { Injectable } from '@nestjs/common';
import { DataService } from '@tradist/data';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HerosService {
	constructor(private dataService: DataService) {}
	create(createHeroDto: CreateHeroDto) {
		return this.dataService.hero.create({ data: createHeroDto });
	}

	findAll() {
		return this.dataService.hero.findMany();
	}

	findOne(id: number) {
		return this.dataService.hero.findUnique({ where: { id } });
	}

	update(id: number, updateHeroDto: UpdateHeroDto) {
		return this.dataService.hero.update({ where: { id }, data: updateHeroDto });
	}

	remove(id: number) {
		return this.dataService.hero.delete({ where: { id } });
	}
}
