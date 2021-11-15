export const getArray = (len: number) =>
	new Array(len).fill(0).map((_, i) => i);

export const getRandomNUm = (min: number, max: number): number =>
	Math.random() * max + min;
