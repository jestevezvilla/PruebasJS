import freepick from '../img/freepik.jpg';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
// const context = canvas.getContext('webgl');
const linearSpeed = 100;
const startTime = (new Date()).getTime();
const myRectangle = {
  x: 0,
  y: 75,
  width: 100,
  height: 50,
  borderWidth: 5,
};
const myRectangle2 = {
  x: 400,
  y: 75,
  width: 50,
  height: 60,
  borderWidth: 1,
};
const myImage = new Image();

const offset = (canvas.width - myRectangle.width) - (myRectangle.borderWidth / 2);

const drawRectangle = () => {
  context.beginPath();
  context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
  context.fillStyle = '#8ED6FF';
  context.fill();
  context.lineWidth = myRectangle.borderWidth;
  context.strokeStyle = 'black';
  context.stroke();
};

const drawRectangle2 = () => {
  const rect = new Path2D();
  rect.rect(myRectangle2.x, myRectangle2.y, myRectangle2.width, myRectangle2.height);

  context.fillStyle = '#BBCCEE';
  context.lineWidth = myRectangle2.borderWidth;
  context.strokeStyle = 'red';

  context.fill(rect);
  context.stroke(rect);
};
const myTriangle = {
  xIncrement: 0,
  yIncrement: 0,
};
const drawTriangle = () => {
  context.beginPath();

  context.moveTo(75 + myTriangle.xIncrement, 50 + myTriangle.yIncrement);
  context.lineTo(100 + myTriangle.xIncrement, 75 + myTriangle.yIncrement);
  context.lineTo(100 + myTriangle.xIncrement, 25 + myTriangle.yIncrement);
  context.closePath();

  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
};
const speed = 1;
let accel = 1;
const controls = {
  37: () => {
    myTriangle.xIncrement -= speed * accel;
    return myTriangle;
  },
  38: () => {
    myTriangle.yIncrement -= speed * accel;
    return myTriangle;
  },
  39: () => {
    myTriangle.xIncrement += speed * accel;
    return myTriangle;
  },
  40: () => {
    myTriangle.yIncrement += speed * accel;
    return myTriangle;
  },
};


const animate = () => {
  // update
  const time = (new Date()).getTime() - startTime;

  // pixels / second
  const newX = (linearSpeed * time) / 1000;

  if (newX < offset) {
    myRectangle.x = newX;
  }

  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawTriangle();
  drawRectangle();
  drawRectangle2();

  // Circle
  context.beginPath();
  context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  context.stroke();

  // Text
  context.font = '48px serif';
  context.strokeStyle = 'black';
  context.strokeText('Adiós world', 300, 200);


  // Image
  context.drawImage(myImage, 300, 400);


  // request new frame
  window.requestAnimationFrame(animate);
};

const init = () => {
  // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  context.globalCompositeOperation = 'destination-over';


  myImage.onload = () => {
    context.drawImage(myImage, 300, 400);
    animate();
  };
  myImage.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
  // myImage.src = freepick;

  drawTriangle();
  drawRectangle();
  drawRectangle2();

  document.addEventListener('keydown', (ev) => {
    accel *= 1.2;
    controls[ev.keyCode] && controls[ev.keyCode]();
  });

  document.addEventListener('keyup', () => {
    accel = 1;
  });
};

init();

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// Frameworks populares
// http://www.createjs.com/
// http://paperjs.org/
// https://threejs.org/
// http://bashooka.com/coding/html5-canvas-javascript-libraries/

