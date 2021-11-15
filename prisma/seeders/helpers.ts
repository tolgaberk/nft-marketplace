export const getArray = (len: number) =>
	new Array(len).fill(0).map((_, i) => i);

export const getRandomIndex = (arr: Array<any>): number =>
	Math.round(Math.random() * (arr.length - 1));

export const shuffleArray = (array: Array<any>) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};
