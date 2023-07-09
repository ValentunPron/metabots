export interface IRobot {
	id: string,
	name: string,
	age: number,
	img: string,
	bodyPart: string,
	rarety: {
		status: number,
		name: string,
	},
	family: string,
	status: {
		life: number,
		attack: number,
		defense: number,
		speed: number,
	}
	price: number,
	realyPrice: number,
}