//Funzione che crea la griglia di mattonelle, passando come parametri le coordinate del punto estremo in basso a sinistra e del punto estremo in alto a destra

var createGrid = function (x1,y1,x2,y2){

var plan = POLYLINE([[x1,y1],[x1,y1+1],[x1+1,y1+1],[x1+1,y1],[x1,y1]])
	
for (var j = y1; j <= y2-1; j++) {
	

for (var i = x1; i <= x2-1; i++) {
	var grid = POLYLINE([[i,j],[i,j+1],[i+1,j+1],[i+1,j],[i,j]])
	
	plan =STRUCT ([plan,grid]);
}
}
return plan;
};


var createWall = function (x1,y1,x2,y2){
	var wall = POLYLINE([[x1,y1],[x1,y2],[x2,y2],[x2,y1],[x1,y1]]);
	COLOR ([0.2,0.2,0.2])(wall);
	return wall;
}

var createWindow = function (x1,y1,x2,y2){
	var wind = POLYLINE([[x1,y1],[x1,y2],[x2,y2],[x2,y1],[x1,y1]]);
	COLOR ([0,0.5,1])(wind);
	return wind;
}

var creaScala = function (x1,y1,x2,y2){
	var scala = POLYLINE([[x1,y1],[x1,y1],[x1,y2],[x1,y2],[x1,y1]]);
for (var z = 0; z <= x2-x1; z=z+0.375) {
	scal = POLYLINE([[x1,y1],[x1+z,y1],[x1+z,y2],[x1,y2],[x1,y1]]);
	scala = STRUCT ([scal,scala]);
	};
return scala;
};

var plan = STRUCT ([
	createGrid (0,0,39,1),
	createGrid (21,1,36,17),
	createGrid (1,10,21,17),
	createGrid (1,17,9,21),
	createGrid (36,4,47,16),
	createGrid (36,16,39,17),
	createGrid (47,4,52,5),
	createGrid (51,5,52,6)

	]);

var walls = STRUCT([ 
	createWall (0.9,1,1.1,21), //muro verticale sx
	createWall (8.9,17,9.1,21), //muro vertcale dx stanzetta
	createWall (50.9,5,51.1,16), //muro verticale dx
	createWall (1,20.9,9,21.1), // muro orizzontale sopra stanzetta
	createWall (8,14.9,26,15.1), //muro panchine
	createWall (25,7.2,34,7.4), //muro centrale
	createWall (1,0.9,8,1.1), //muro orizzonatale piscinaG
	createWall (38,15.9,51,16.1), //muro orizzonatale alto piscinaP
	createWall (41,4.9,51,5.1), //muro orizzonatale basso piscinaP
	createWall (37,11.3,43,11.5), //muro orizzonatale alto piscinaP
	
	]);

var windows = STRUCT([
	createWindow (1,16.95,9,17.05), //finestra orizzontale stanzetta
	createWindow (30,13.75,40,13.85), //finestra orizzontale centrale
	createWindow (30,4.95,41,5.05), //finestra orizzontale bassa
	createWindow (44.7,7,44.8,14), //finestra orizzontale bassa
	createWindow (30.95,7.2,31.05,13.85), //finestra doppia SX
	createWindow (31.95,7.2,32.05,13.85), //finestra doppia DX
	createWindow (4.95,17,5.05,21) //finestra in mezzo stanzetta



	]);

var piscinaG =  COLOR ([0,0,1])(POLYLINE([[1.15,1.15],[20.95,1.15],[20.95,9.95],[1.105,9.95],[1.15,1.15]]));

var piscinaP = COLOR ([0,0,1])(POLYLINE([[47.05,5.15],[50.85,5.15],[50.85,15.85],[47.05,15.85],[47.05,5.15]]));

var scalini = creaScala(36,1,39,4);

var finalPlan = STRUCT([plan,walls,windows,piscinaP,piscinaG,scalini]);


DRAW (finalPlan);

