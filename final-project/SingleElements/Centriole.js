
/*Domains*/
var domain1 = INTERVALS(1)(100);
var domain2 = DOMAIN([[0,1],[0,1]])([100,100]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([25,25,1]);

/*Color*/
var mattAquaMarine = [127/255, 255/255, 212/255,1]; 
var transparentAquaMarine = [127/255, 255/255, 212/255,1];

/*Function*/

/* This function creates an array of knots used by the function nubs. The function takes as input an array of control points. It returns an array of knots. 

   INPUT - An array of points

   OUTPUT - An array of knots.

*/
function knots (point) {
  var k = 2; 
  var m =point.length;
  var n = (m + k + 1);
  var first = 1;
  var last = n - 3;

  var knots = [];

  for (var i = 0; i < 3; i++) {
     knots[i] = 0;
    };
  for (var i = 3; i < last; i++,first++) {
     knots[i] = first;
    };
  for (var i = last; i < n; i++) {
     knots[i] = first;
    };
  return knots;
};
/* This function creates a curve with the function Nubs. The function takes as input an array of control points. It returns to the curve. 

   INPUT - An array of points
   
   OUTPUT - A curve built with the function NUBS

*/
function createNubs (point) {
  var knots0 = knots(point);
  var c0 = NUBS(S0)(2)(knots0)(point);
  var curve0 = MAP(c0)(domain1)
  //DRAW(curve0)
  return c0;
};
/* This function creates a cylindrical surface. It takes as input two arrays of array of points one for the upper base one for the lower base of cylender  
 
   INPUT - Two arrays of arrays of control points.

   OUTPUT - A bezier surface. 

*/
function generateMicrotubule (pointSup,pointInf) {
  var c0 =createNubs(pointSup);
  var c1 =createNubs(pointInf);
 
  var b = BEZIER(S1)([c0,c1]);
  //var b1 = MAP(b)(domain2);
  //DRAW (b1);
  return b;
};

//Microtubule triplet A

//Microtubule  A1 ext
var point_supA1ext =  [[66.66948699951172, 229.05184936523438, 0],[65.73657989501953, 229.60061645507812, 0],[65.21524810791016, 230.43748474121094, 0],[65.06433868408203, 231.32923889160156, 0],[65.311279296875, 232.09751892089844, 0],[65.81889343261719, 232.74232482910156, 0],[66.60089111328125, 233.12644958496094, 0],[67.87677764892578, 233.16761779785156, 0],[68.7410888671875, 232.632568359375, 0],[69.33100891113281, 231.85057067871094, 0],[69.48192596435547, 231.08229064941406, 0],[69.23497772216797, 230.27285766601562, 0],[68.86455535888672, 229.49085998535156, 0],[67.7944564819336, 229.0106964111328, 0],[66.66948699951172, 229.05184936523438, 0]] ;
var point_infA1ext = [[66.66948699951172, 229.05184936523438, -36],[65.73657989501953, 229.60061645507812, -36],[65.21524810791016, 230.43748474121094, -36],[65.06433868408203, 231.32923889160156, -36],[65.311279296875, 232.09751892089844, -36],[65.81889343261719, 232.74232482910156, -36],[66.60089111328125, 233.12644958496094, -36],[67.87677764892578, 233.16761779785156, -36],[68.7410888671875, 232.632568359375, -36],[69.33100891113281, 231.85057067871094, -36],[69.48192596435547, 231.08229064941406, -36],[69.23497772216797, 230.27285766601562, -36],[68.86455535888672, 229.49085998535156, -36],[67.7944564819336, 229.0106964111328, -36],[66.66948699951172, 229.05184936523438, -36]];
var micA1ext = generateMicrotubule(point_supA1ext,point_infA1ext);

//Microtubule  A1 int
var point_supA1int = [[66.83411407470703, 229.6280517578125, 0],[66.09327697753906, 229.97103881835938, 0],[65.7777328491211, 230.5472412109375, 0],[65.64054107666016, 231.2880859375, 0],[65.83261108398438, 231.9466094970703, 0],[66.13443756103516, 232.23471069335938, 0],[66.6969223022461, 232.59140014648438, 0],[67.71214294433594, 232.6188507080078, 0],[68.43926239013672, 232.207275390625, 0],[68.68621063232422, 231.6584930419922, 0],[68.85083770751953, 231.0411376953125, 0],[68.75480651855469, 230.39633178710938, 0],[68.4529800415039, 229.90243530273438, 0],[67.72586059570312, 229.55946350097656, 0],[66.83411407470703, 229.6417694091797, 0],[66.83411407470703, 229.6280517578125, 0]] ;
var point_infA1int = [[66.83411407470703, 229.6280517578125, -36],[66.09327697753906, 229.97103881835938, -36],[65.7777328491211, 230.5472412109375, -36],[65.64054107666016, 231.2880859375, -36],[65.83261108398438, 231.9466094970703, -36],[66.13443756103516, 232.23471069335938, -36],[66.6969223022461, 232.59140014648438, -36],[67.71214294433594, 232.6188507080078, -36],[68.43926239013672, 232.207275390625, -36],[68.68621063232422, 231.6584930419922, -36],[68.85083770751953, 231.0411376953125, -36],[68.75480651855469, 230.39633178710938, -36],[68.4529800415039, 229.90243530273438, -36],[67.72586059570312, 229.55946350097656, -36],[66.83411407470703, 229.6417694091797, -36],[66.83411407470703, 229.6280517578125, -30]];
var micA1int = generateMicrotubule(point_supA1int,point_infA1int);

var volume = BEZIER (S2)([micA1ext,micA1int]);
var volumeMap_microtubeA1 =  COLOR(transparentAquaMarine)(MAP(volume)(domain3));
DRAW (volumeMap_microtubeA1);

//Microtubule  A2
var volumeMap_microtubeA2 = T([0,1])([3.8,-2])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeA2);

//Microtubule  A3
var volumeMap_microtubeA3 = T([0,1])([7.8,-3.2])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeA3);

//Microtubule triplet B

//Microtubule  b1
var volumeMap_microtubeB1 = T([0,1])([16.2,-8])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeB1);

//Microtubule B2
var volumeMap_microtubeB2 = T([0,1])([18,-11.8])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeB2);

//Microtubule B3
var volumeMap_microtubeB3 = T([0,1])([19,-15.8])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeB3);

//Microtubule triplet C

//Microtubule  C1
var volumeMap_microtubeC1 = T([0,1])([22,-22])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeC1);

//Microtubule C2
var volumeMap_microtubeC2 = T([0,1])([19.9,-25])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeC2);

//Microtubule C3
var volumeMap_microtubeC3 = T([0,1])([17.8,-28])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeC3);


//Microtubule triplet D

//Microtubule D1
var volumeMap_microtubeD1 = T([0,1])([17.5,-36])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeD1);

//Microtubule D2
var volumeMap_microtubeD2 = T([0,1])([13.9,-38])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeD2);

//Microtubule D3
var volumeMap_microtubeD3 = T([0,1])([10.5,-40])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeD3);


//Microtubule triplet E

//Microtubule E1
var volumeMap_microtubeE1 = T([0,1])([4,-48])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeE1);

//Microtubule E2
var volumeMap_microtubeE2 = T([0,1])([0.5,-47])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeE2);

//Microtubule E3
var volumeMap_microtubeE3 = T([0,1])([-3.5,-46])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeE3);

//Microtubule triplet F

//Microtubule F1
var volumeMap_microtubeF1 = T([0,1])([-15,-44])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeF1);

//Microtubule F2
var volumeMap_microtubeF2 = T([0,1])([-17,-41])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeF2);

//Microtubule F3
var volumeMap_microtubeF3 = T([0,1])([-18.5,-38])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeF3);

//Microtubule triplet G
//Microtubule G1
var volumeMap_microtubeG1 = T([0,1])([-26,-33])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeG1);

//Microtubule G2
var volumeMap_microtubeG2 = T([0,1])([-25,-29])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeG2);

//Microtubule G3
var volumeMap_microtubeG3 = T([0,1])([-24,-25])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeG3);

//Microtubule triplet H
//Microtubule H1
var volumeMap_microtubeH1 = T([0,1])([-25,-17])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeH1);

//Microtubule H2
var volumeMap_microtubeH2 = T([0,1])([-22,-14])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeH2);

//Microtubule H3
var volumeMap_microtubeH3 = T([0,1])([-19,-11])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeH3);

//Microtubule triplet I
//Microtubule I1
var volumeMap_microtubeI1 = T([0,1])([-15,-5])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeI1);

//Microtubule I2
var volumeMap_microtubeI2 = T([0,1])([-11,-4])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeI2);

//Microtubule I3
var volumeMap_microtubeI3 = T([0,1])([-7,-3])(volumeMap_microtubeA1)
DRAW (volumeMap_microtubeI3);

/* This function generates and draws a set of parallel lines. It takes in input an array of control points.  
 
   INPUT - An array of control points.

*/
function replicaPoly(p1){
  
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]-4]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]-4]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]-4]});
var p5 = p4.map(function (p) {return [p[0], p[1], p[2]-4]});
var p6 = p5.map(function (p) {return [p[0], p[1], p[2]-4]});
var p7 = p6.map(function (p) {return [p[0], p[1], p[2]-4]});
var p8 = p7.map(function (p) {return [p[0], p[1], p[2]-4]});

var poly1 = POLYLINE(p1);
var poly2 = POLYLINE(p2);
var poly3 = POLYLINE(p3);
var poly4 = POLYLINE(p4);
var poly5 = POLYLINE(p5);
var poly6 = POLYLINE(p6);
var poly7 = POLYLINE(p7);
var poly8 = POLYLINE(p8);
var str_poly =STRUCT([poly1,poly2,poly3,poly4,poly5,poly6,poly7,poly8]);
DRAW(str_poly);
}

//Protein arms I-A
var p1 = [[61.995713806152344, 228.00794982910156, -4],[65.21707000732422, 231.3988037109375, -4]];
replicaPoly(p1);
//Protein arms A-B
var p1 =[[81.97642364501953,224.37355041503906, -4],[76.81997680664062,227.64761352539062,-4]];
replicaPoly(p1);
// Protein arms B-C
var p1 = [[88.78474426269531, 210.5489959716797, -4],[86.69847106933594, 213.36883544921875, -4]];
replicaPoly(p1);
//Protein arms C-D
var p1 = [[83.73897552490234, 202.5671691894531, -4],[86.25423431396484, 196.0900573730469, -4]];
replicaPoly(p1);
//Protein arms D-E
var p1 = [[73.15452194213867, 183.1868591308594, -4],[75.99959945678711, 190.78076171875, -4]];
replicaPoly(p1);
//Protein arms E-F
var p1 = [[62.15452194213867, 185.1868591308594, -4],[53.49959945678711, 185.78076171875, -4]];
replicaPoly(p1);
//Protein arms F-G
var p1 = [[47.03483200073242, 193.01904296875, -4],[43.19974136352539, 196.81597900390625, -4]];
replicaPoly(p1);
//Protein arms G-H
var p1 = [[42.184486389160156, 212.1962890625, -4],[43.076856994628906, 207.9810302734375, -4]];
replicaPoly(p1);
//Protein arms H-I
var p1 = [[50.682125091552734, 225.60711669921875, -4],[49.39280700683594, 220.9674530029297, -4]];
replicaPoly(p1);





