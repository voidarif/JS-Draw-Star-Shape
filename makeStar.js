const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.strokeStyle = 'blue';
c.lineWidth = 3;

let hue = 0;
let isDrawing = false;
let angle = 0;

function drawShape (x, y, radius, inset, sides, color) {
c.beginPath();

c.save();
c.translate(x, y)
c.moveTo(0, 0 - radius);

for (var i = 0; i < sides; i++) {
c.lineTo(0, 0 - radius);
c.rotate(Math.PI / sides);
c.lineTo(0, 0 - radius * inset);
c.rotate(Math.PI / sides);
}

c.restore();
c.closePath();
c.stroke();
//c.fillStyle = `hsl(${hue}, 100%, 50%)`;
c.fillStyle = color;
c.fill();
}

drawShape(100, 100, 40, 0.4, 5);
drawShape(100, 200, 30, 0.5, 3);

window.addEventListener('mousemove', (event)=>{
	if(isDrawing){

	c.save();
	c.translate(event.x, event.y);

	c.rotate(angle);
	drawShape(0, 0, 40, 0.4, 5, 'red');

	c.rotate(-angle * 2);
	drawShape(50, 50, 20, 0.5, 4, 'green');

	c.restore();
	//hue += 3
	angle += 0.1;
		}
});


window.addEventListener('mousedown', (event)=>{
	isDrawing = true;
});

window.addEventListener('mouseup', (event)=>{
	isDrawing = false;
});