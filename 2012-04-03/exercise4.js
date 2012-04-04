

//Pilastri

var pillars = T([0,1])([26,6.7]) (SIMPLEX_GRID([
	REPLICA(4)([0.15, -6.1]),  
	REPLICA (2)([0.15, -7]),			  
	[-1.60,3]						   
]));

//Base

var floor1 = SIMPLEX_GRID([
	[1],
	[2],
	[1.6]
]);
var floor2 = SIMPLEX_GRID([
	[-1,9],
	[1, -9, 12],
	[1.6]
]);
var floor3 = T([0])([10]) (SIMPLEX_GRID([
	[11],
	[1, -9, 7],
	[1.6]
]));

var floor4 = T([0])([20]) ( SIMPLEX_GRID([
	[15],
	[17],
	[1.6]
]));
var floor5 = T([0])([35]) (SIMPLEX_GRID([
	[3],
	[1,-3,13],
	[1.6]
]));
var floor6 = T([0])([38]) (SIMPLEX_GRID([
	[8],
	[-4,12],
	[1.6]
]));
var floor7 = T([0])([46]) (SIMPLEX_GRID([
	[4],
	[-4,1],
	[1.6]
]));
var floor8 = T([0])([50]) (SIMPLEX_GRID([
	[1],
	[-4,2],
	[1.6]
]));

var floors = STRUCT ([floor1,floor2,floor3,floor4,floor5,floor6,floor7,floor8]);

//Muri


var wallA = COLOR ([1.0, 1.0, 0.8]) (T([0,1])([1,1]) (SIMPLEX_GRID([
	[7],
	[0.2],
	[-1.6,3]
])));
var wallB = COLOR ([1.0, 1.0, 0.8]) (T([0,1])([1,1]) ( SIMPLEX_GRID([
	[0.2],
	[21],
	[4.6]
])));

var wallC = COLOR ([1.0, 1.0, 0.8]) (T([0,1])([1,22]) (SIMPLEX_GRID([
	[9],
	[0.2],
	[4.6]
])));
var wallD = COLOR ([1.0, 1.0, 0.8]) (T([0,1])([9.8,17]) (SIMPLEX_GRID([
	[0.2],
	[5],
	[-1.6,3]
])));

var wallE = COLOR ([1.0, 1.0, 0.8]) (T([0,1])([8,15]) (SIMPLEX_GRID([
	[18],
	[0.2],
	[-1.6,3]
])));

var wallF = COLOR ([0.4, 0.2, 0.2]) (T([0,1])([24,7]) (SIMPLEX_GRID([
	[9],
	[0.2],
	[-1.6,3]
])));

var wallG = COLOR ([1.0, 1.0, 0.8]) (T([0,1])([37,16]) (SIMPLEX_GRID([
	[13],
	[0.2],
	[4.6]
])));

var wallH =  COLOR ([1.0, 1.0, 0.8]) (T([0,1])([40,5]) ( SIMPLEX_GRID([
	[10],
	[0.2],
	[4.6]
])));

var wallI = COLOR ([1.0, 1.0, 0.8]) (T([0,1])([50,5]) (SIMPLEX_GRID([
	[0.2],
	[11],
	[4.6]
])));
var wallL = COLOR ([1.0, 0.4, 0.0]) (T([0,1])([37,11.5]) (SIMPLEX_GRID([
	[6],
	[0.2],
	[-1.6,3]
])));

var walls =STRUCT([wallI,wallH,wallG,wallF,wallE,wallC,wallD,wallB,wallA,wallL]);

//Finestre
var colFinestrone = SIMPLEX_GRID([
	[0.05,-3.3,0.05,-3.3,0.05,-3.3,0.05],
	[0.05],
	[-1.6,3]
]);
var rigFinestrone= SIMPLEX_GRID ([
	[10],
	[0.05],
	[-1.6,0.05,-2.9,0.05]
	]);

var windA = T([0,1])([30,5]) (STRUCT([colFinestrone,rigFinestrone]));


var colFinestroneIn = SIMPLEX_GRID([
	[0.05],
	[0.05,-3.425,0.05,-3.425,0.05],
	[-1.6,3]
]);
var rigFinestroneIn= SIMPLEX_GRID ([
	[0.05],
	[7],
	[-1.6,0.05,-2.9,0.05]
	]);

var windB = T([0,1])([31,7]) (STRUCT([colFinestroneIn,rigFinestroneIn]));

var windC = T([0])([1]) (windB);


var windD =  T([0,1])([31,14]) 
	(STRUCT ([
		SIMPLEX_GRID([
		REPLICA(11)([0.05, -0.94]),
		[0.05],
		[-1.6,3]
		]),
		SIMPLEX_GRID ([
		[10],
		[0.05],
		[-1.6,0.05,-2.9,0.05]
	])
	]));

var windE =  T([0,1])([44.5,7.2]) 
	(STRUCT ([
		SIMPLEX_GRID([
		[0.05],
		REPLICA(8)([0.05, -0.94]),
		[-1.6,3]
		]),
		SIMPLEX_GRID ([
		[0.05],
		[7],
		[-1.6,0.05,-2.9,0.05]
	])
	]));

var windF =  T([0,1])([41,14]) 
	(STRUCT ([
		SIMPLEX_GRID([
		[0.05],
		REPLICA(3)([0.05, -0.95]),
		[-1.6,3]
		]),
		SIMPLEX_GRID ([
		[0.05],
		[1.99],
		[-1.6,0.05,-2.9,0.05]
	])
	]));

var windG =  T([0,1])([30,5]) 
	(STRUCT ([
		SIMPLEX_GRID([
		[0.05],
		REPLICA(3)([0.05, -0.95]),
		[-1.6,3]
		]),
		SIMPLEX_GRID ([
		[0.05],
		[1.99],
		[-1.6,0.05,-2.9,0.05]
	])
	]));

var windH =  T([0,1])([1,17]) 
	(STRUCT ([
		SIMPLEX_GRID([
		REPLICA(10)([0.05, -0.95]),
		[0.05],
		[-1.6,3]
		]),
		SIMPLEX_GRID ([
		[9],
		[0.05],
		[-1.6,0.05,-2.9,0.05]
	])
	]));

var windJ =  T([0,1])([5,17]) 
	(STRUCT ([
		SIMPLEX_GRID([
		[0.05],
		REPLICA(5)([0.05, -0.95]),
		[-1.6,3]
		]),
		SIMPLEX_GRID ([
		[0.05],
		[5],
		[-1.6,0.05,-2.9,0.05]
	])
	]));

var windows =STRUCT([windA,windB,windC,windD,windE,windF,windG,windH,windJ]);

//Panchina

var panchina = T([0,1])([8,14]) 
	(STRUCT ([
		SIMPLEX_GRID([
		REPLICA(8)([0.2, -1.9]),
		[0.2],
		[-1.6,0.5]
		]),
		SIMPLEX_GRID ([
		[15],
		[0.7],
		[-2.1,0.2]
	])
	]));

//Tetti

var roof1 = T([1])([13]) (SIMPLEX_GRID([
	[11],
	[10],
	[-4.6,0.5]
]));

var roof2 = T([0,1])([24,4]) (SIMPLEX_GRID([
	[23],
	[13],
	[-4.6,0.5]
]));
//SCALINATA 

var scalino1 = T([0,1])([35,1]) (SIMPLEX_GRID([
	[3],
	[3],
	[0.4]
]));
var scalino2 = T([0,1])([35,1]) (SIMPLEX_GRID([
	[2.25],
	[3],
	[-0.4,0.4]
]));
var scalino3 = T([0,1])([35,1]) (SIMPLEX_GRID([
	[1.5],
	[3],
	[-0.8,0.4]
]));
var scalino4 = T([0,1])([35,1]) (SIMPLEX_GRID([
	[0.75],
	[3],
	[-1.0,0.4]
]));

var scalini = STRUCT([scalino1,scalino2,scalino3,scalino4]);

//Colorazione modello. Le colorazioni dei muri sono direttamente implementate su ogni singolo muro.

var water1= COLOR ([0.8, 1.0, 0.8]) (T([0,1])([1,1]) (SIMPLEX_GRID([
	[20],
	[9],
	[1]
])));

var water2= COLOR ([0.8, 1.0, 0.8]) (T([0,1])([46,5]) (SIMPLEX_GRID([
	[4],
	[11],
	[1]
])));

COLOR ([0.2,0.2,0.2])(pillars);
COLOR ([1.0, 1.0, 0.8])(roof1);
COLOR ([1.0, 1.0, 0.8])(roof2);
COLOR ([1.0, 1.0, 0.8])(floors);
COLOR ([1.0, 0.8, 0.4])(panchina);
COLOR ([1.0, 1.0, 0.8])(scalini);
 

var pavillion = STRUCT ([floors,pillars,walls,windows,panchina,roof1,roof2,water1,water2,scalini]);

DRAW (pavillion);


//POLTRONA

var seduta = ROTATE ([1])(Math.PI/18)(SIMPLEX_GRID([
	[0.7],
	[0.6],
	[0.2]
]));

var schienale = ROTATE ([1])(Math.PI/9)(SIMPLEX_GRID([
	[0.1],
	[0.6],
	[-0.2,0.5]
]));

var gamba1 = (SIMPLEX_GRID([
	[0.1],
	[0.6],
	[0.2]
]));


var gamba2 = T([0])([0.55])(SIMPLEX_GRID([
	[0.1],
	[-0.05,0.1,-0.3,0.1,-0.05],
	[0.2]
]));


var poltrona1 = T([0,1,2])([42,9,1.6]) (COLOR (0.9,0.9,0.9) (STRUCT ([seduta,schienale,gamba1,gamba2])));
var poltrona2 = T([0,1,2])([34,9,1.6]) (R([2])([-Math.PI]) (COLOR (0.9,0.9,0.9) (STRUCT ([seduta,schienale,gamba1,gamba2]))));
var poltrona3 = T([0,1,2])([42,10,1.6]) (COLOR (0.9,0.9,0.9) (STRUCT ([seduta,schienale,gamba1,gamba2])));

var poltrone = STRUCT([poltrona1,poltrona2,poltrona3]);

DRAW (poltrone);



