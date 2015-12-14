var canvasMinWidth = 500;
var canvasMaxWidth = 900;
var canvasMinHeight = 400;
var canvasMaxHeight = 600;

var route = null;

exports.redrawCanvas = function(floorPlanImage, beaconsPlotted, routesPlotted) {
  clearCanvas();

  drawFloorLayout(floorPlanImage);

  var beaconImage = beaconImg();
  for (var i = 0; i < beaconsPlotted.length; i++) {
	  drawImage(beaconImage, beaconsPlotted[i].pointX, beaconsPlotted[i].pointY);
  }

  for (var i = 0; i < routesPlotted.length; i++) {
	  drawLine(routesPlotted[i].startX, routesPlotted[i].startY, routesPlotted[i].endX, routesPlotted[i].endY, 'blue');
  }
}

exports.plot = function(event, pen) {
  if (pen === 'beacon') {
	  return plotBeacon(event);
  } else if (pen === 'route') {
	  return plotRoute(event);
  }
}

exports.cancelDrawRoute = function() {
  resetRoute();
}

exports.previewRoute = function(event) {
  if (route != null) {
	var mousePos = getMousePos(event);
  	drawLine(route[0], route[1], mousePos.x, mousePos.y, "red");
  }
}

function canvas() {
  return document.getElementById("floorplan-canvas");
}

function beaconImg() {
  return document.getElementById("beacon");
}

function clearCanvas() {
  canvas().getContext("2d").clearRect(0, 0, canvas().width, canvas().height);
}

function drawFloorLayout(imgFloorPlan) {
  if (imgFloorPlan != null && imgFloorPlan.src != null) {
	  var canvasElement = canvas();

	  var canvasWidth = Math.min(imgFloorPlan.width, canvasMaxWidth);
	  var canvasWidth = Math.max(canvasWidth, canvasMinWidth);
	  var canvasHeight = Math.min(imgFloorPlan.height, canvasMaxHeight);
	  var canvasHeight = Math.max(canvasHeight, canvasMinHeight);

	  canvasElement.width = canvasWidth;
	  canvasElement.height = canvasHeight;


	  //console.log('Floor plan image ' + imgFloorPlan);
	  drawImage(imgFloorPlan, 0, 0, canvasWidth, canvasHeight);
  }
}

function getMousePos(evt) {
  var rect = canvas().getBoundingClientRect();

  return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
  };
}

function plotBeacon(event) {
  var mousePos = getMousePos(event);

  var offset = 10;
  var x = mousePos.x - offset
  var y = mousePos.y - offset

  var newBeacon = {id: unqiueId(), name: null, uuid: null, pointX: x, pointY: y};
  return newBeacon;
}

function plotRoute(event) {
  var mousePos = getMousePos(event);

  if (route == null) {
	  route = []
	  route[0] = mousePos.x;
	  route[1] = mousePos.y;
	  return null;
  } else {
	  route[2] = mousePos.x;
	  route[3] = mousePos.y;

	  var newRoute = {id: unqiueId(), name: null, startX: route[0], startY: route[1], endX: route[2], endY: route[3]};
	  resetRoute();

	  return newRoute;
  }
}

function resetRoute() {
  route = null;
}

function drawLine(startX, startY, endX, endY, style) {
  var ctx = canvas().getContext("2d");
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
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

function unqiueId() {
	return Math.random().toString(16).slice(2);
}
