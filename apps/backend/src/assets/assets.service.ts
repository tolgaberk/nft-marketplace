import { Asset } from '.prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetsService {
	constructPath(asset: Asset) {
		return `${asset.folder}/${asset.name}`;
	}
}

export type AssetWithPath = Asset & { path: string };
