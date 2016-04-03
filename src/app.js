const WIDTH = Framer.Screen.width;
const HEIGHT = Framer.Screen.width;

Framer.Defaults.Animation = {
	curve: 'spring(150, 10, 0)'
};

let circle = new Layer({
	x: WIDTH / 2,
	y: HEIGHT / 2,
	width: 168,
	height: 168,
	image: 'images/circle.png'
});

circle.on(Events.Click, () => {
	let bounce = new Animation({
		layer: circle,
		properties: {
			x: WIDTH * Math.random(),
			y: HEIGHT * Math.random()
		}
	});
	return bounce.start();
});
