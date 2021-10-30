import { Hero as IHero} from ".prisma/client";

export class Hero implements IHero {
    id: number;
    title: string;
    description: string;
}
