console.log('[Guibsu Obbo] YUMMY YUMMY experiment!!');

const coisa = new Image();
coisa.src = './criatura.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const criatura = {
	sprX: 0,
	sprY: 0,
	largoA: 32,
	altoA: 34,
	x:10,
	y:50,
	
	drawTHIS(){
		contexto.drawImage(
		coisa,
		criatura.sprX, criatura.sprY,//aqui é onde se localiza o começo do sprite.
		criatura.largoA, criatura.altoA, //tamanho do sprite.
		criatura.x, criatura.y, // onde o sprite se localiza na tela 'o canvas'.
		criatura.largoA, criatura.altoA, //tamanho do sprite no canvas.
		);
	}
}



function loop(){
	criatura.drawTHIS();
	
	requestAnimationFrame(loop);
}

loop();
