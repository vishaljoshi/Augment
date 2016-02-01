const canvasMinWidth = 500;
const canvasMaxWidth = 900;
const canvasMinHeight = 400;
const canvasMaxHeight = 600;

export function unqiueId() {
	return Math.random().toString(16).slice(2);
}

function canvas() {
  return document.getElementById("floorplan-canvas");
}

function drawingCanvas() {
  return document.getElementById("drawing-canvas");
}

function clearCanvas() {
  canvas().getContext("2d").clearRect(0, 0, canvas().width, canvas().height);
}

export function clearDrawingCanvas() {
  drawingCanvas().getContext("2d").clearRect(0, 0, canvas().width, canvas().height);
}

function beaconImg() {
  return document.getElementById("beacon");
}

export function getMousePos(evt) {
  var rect = canvas().getBoundingClientRect();

  return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
  };
}

export function getBeaconMousePos(event) {
  var mousePos = getMousePos(event);

  var offset = 10;
  var x = mousePos.x - offset
  var y = mousePos.y - offset

  return {x: x, y: y};
}

export function redrawCanvas(floorPlanImageSrc, beacons, routes) {
  clearCanvas();

  drawFloorLayout(floorPlanImageSrc);

  var beaconImage = beaconImg();
  beacons.map(v =>
	  drawImage(beaconImage, v.xCord, v.yCord)
  )

  routes.map(v =>
	  drawLine(canvas(), v.startx, v.starty, v.endx, v.endy, 'blue')
  )
}

export function drawLinePreview(startx, starty, endx, endy) {
  clearDrawingCanvas();
  //console.log('draw preview line', startx, starty, endx, endy);
  drawLine(drawingCanvas(), startx, starty, endx, endy, 'red')
}

function drawFloorLayout(floorPlanImageSrc) {
  if (floorPlanImageSrc != null) {
	  var imgFloorPlan = new Image();
	  imgFloorPlan.src = floorPlanImageSrc;

	  var canvasElement = canvas();
	  var drawingElement = drawingCanvas();

	  var canvasWidth = Math.min(imgFloorPlan.width, canvasMaxWidth);
	  var canvasWidth = Math.max(canvasWidth, canvasMinWidth);
	  var canvasHeight = Math.min(imgFloorPlan.height, canvasMaxHeight);
	  var canvasHeight = Math.max(canvasHeight, canvasMinHeight);

	  canvasElement.width = drawingElement.width = canvasWidth;
	  canvasElement.height = drawingElement.height = canvasHeight;

	  drawImage(imgFloorPlan, 0, 0, canvasWidth, canvasHeight);
  }
}

function drawLine(canvas, startX, startY, endX, endY, style) {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.lineWidth = 3;
  ctx.strokeStyle = style;
  ctx.stroke();
}

function drawImage(image, x, y, width, height) {
  var ctx = canvas().getContext("2d");

  if (width == undefined) {
	  ctx.drawImage(image, x, y);
  } else {
	  ctx.drawImage(image, x, y, width, height);
  }
}