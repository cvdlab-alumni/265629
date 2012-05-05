/*
 * EXERCISE 1 - Produce the model of a single wing in a 
 * local coordinate system.
 */

// Domain
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);


/*
* Wing profile 1 : con 20 semi-curve le più estreme con curvatura minore (15cm) 
* tutte le interne con y=30cm distanziate tra loro di 32.5cm
*/

var p0 = [[15,-1,-1.5],[0,1.5,0],[0,0,-1.5]];
var p1 = [[15,-1,3.25],[0,3,3.25],[0,0,3.25]];
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p5 = p4.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p6 = p5.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p7 = p6.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p8 = p7.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p9 = p8.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p10 = p9.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p11 = p10.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p12 = p11.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p13 = p12.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p14 = p13.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p15 = p14.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p16 = p15.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p17 = p16.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p18 = p17.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p19 = p18.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p20 = [[15,-1,61.75],[0,1.5,65],[0,0,61.75]];



var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);
var c8 = BEZIER(S0)(p8);
var c9 = BEZIER(S0)(p9);
var c10 = BEZIER(S0)(p10);
var c11 = BEZIER(S0)(p11);
var c12 = BEZIER(S0)(p12);
var c13 = BEZIER(S0)(p13);
var c14 = BEZIER(S0)(p14);
var c15 = BEZIER(S0)(p15);
var c16 = BEZIER(S0)(p16);
var c17 = BEZIER(S0)(p17);
var c18 = BEZIER(S0)(p18);
var c19 = BEZIER(S0)(p19);
var c20 = BEZIER(S0)(p20);
var controls = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20];

var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));

DRAW(curves);

var controls_low=[c0,c20]; //curve di controllo profilo anteriore dell'ala
var controls_left=[c0,c1]; //curve di controllo profilo chiusura sinistra
var controls_right=[c19,c20]; //curve di controllo profilo chiusura destra
var controls_up = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19]; //curve di controllo profilo superiore dell'ala

var wing_low = BEZIER(S1)(controls_low);
var surf_low = COLOR ([1, 1, 0.8, 0.99])(MAP(wing_low)(domain2));

var wing_left = BEZIER(S1)(controls_left);
var surf_left = COLOR ([0.2, 0.4, 0.2, 0.99])(MAP(wing_left)(domain2));

var wing_right = BEZIER(S1)(controls_right);
var surf_right = COLOR ([0.2, 0.4, 0.2, 0.99])(MAP(wing_right)(domain2));

var wing_up = BEZIER(S1)(controls_up);
var surf_up = COLOR ([0.2, 0.4, 0.2, 0.99])(MAP(wing_up)(domain2));

var surf = STRUCT([surf_up,surf_right,surf_left,surf_low]);
DRAW(surf);


//Pali di raccordo 1

var controlSide1 = [[5,1,50],[0,20,50],[1,0,0],[-1,0,0]]; // p0, p1, t0, t1
var controlSide2 = [[5,1,50],[0,20,50],[-1,0,0],[1,0,0]];
var controlSide3 = [[5,1,50],[0,20,50],[0,0,1],[0,0,-1]]; // p0, p1, t0, t1
var controlSide4 = [[5,1,50],[0,20,50],[0,0,-1],[0,0,1]];
var c1 = CUBIC_HERMITE(S0)(controlSide1);
var c2 = CUBIC_HERMITE(S0)(controlSide2);
var c3 = CUBIC_HERMITE(S0)(controlSide3);
var c4 = CUBIC_HERMITE(S0)(controlSide4);
/*var palo1 = MAP(c1)(domain1);
var palo2 = MAP(c2)(domain1);
var palo3 = MAP(c3)(domain1);
var palo4 = MAP(c4)(domain1);
DRAW(palo1);
DRAW(palo2);
DRAW(palo3);
DRAW(palo4); */
var controls = [c1,c2,c3,c4];
var palo = BEZIER(S1)(controls);
var surf = COLOR([0.8, 0.6, 0.0]) (MAP(palo)(domain2));
DRAW(surf);

//Pali di raccordo 2

var controlSide1 = [[10,0,50],[5,19,50],[1,0,0],[-1,0,0]]; // p0, p1, t0, t1
var controlSide2 = [[10,0,50],[5,19,50],[-1,0,0],[1,0,0]];
var controlSide3 = [[10,0,50],[5,19,50],[0,0,1],[0,0,-1]]; // p0, p1, t0, t1
var controlSide4 = [[10,0,50],[5,19,50],[0,0,-1],[0,0,1]];
var c1 = CUBIC_HERMITE(S0)(controlSide1);
var c2 = CUBIC_HERMITE(S0)(controlSide2);
var c3 = CUBIC_HERMITE(S0)(controlSide3);
var c4 = CUBIC_HERMITE(S0)(controlSide4);

var controls = [c1,c2,c3,c4];
var palo = BEZIER(S1)(controls);
var surf = COLOR([0.8, 0.6, 0.0]) (MAP(palo)(domain2));
DRAW(surf);

//Pali di raccordo 3

var controlSide1 = [[5,1,25],[0,20,25],[1,0,0],[-1,0,0]]; // p0, p1, t0, t1
var controlSide2 = [[5,1,25],[0,20,25],[-1,0,0],[1,0,0]];
var controlSide3 = [[5,1,25],[0,20,25],[0,0,1],[0,0,-1]]; // p0, p1, t0, t1
var controlSide4 = [[5,1,25],[0,20,25],[0,0,-1],[0,0,1]];
var c1 = CUBIC_HERMITE(S0)(controlSide1);
var c2 = CUBIC_HERMITE(S0)(controlSide2);
var c3 = CUBIC_HERMITE(S0)(controlSide3);
var c4 = CUBIC_HERMITE(S0)(controlSide4);

var controls = [c1,c2,c3,c4];
var palo = BEZIER(S1)(controls);
var surf = COLOR([0.8, 0.6, 0.0]) (MAP(palo)(domain2));
DRAW(surf);

//Pali di raccordo 4

var controlSide1 = [[10,0,25],[5,19,25],[1,0,0],[-1,0,0]]; // p0, p1, t0, t1
var controlSide2 = [[10,0,25],[5,19,25],[-1,0,0],[1,0,0]];
var controlSide3 = [[10,0,25],[5,19,25],[0,0,1],[0,0,-1]]; // p0, p1, t0, t1
var controlSide4 = [[10,0,25],[5,19,25],[0,0,-1],[0,0,1]];
var c1 = CUBIC_HERMITE(S0)(controlSide1);
var c2 = CUBIC_HERMITE(S0)(controlSide2);
var c3 = CUBIC_HERMITE(S0)(controlSide3);
var c4 = CUBIC_HERMITE(S0)(controlSide4);

var controls = [c1,c2,c3,c4];
var palo = BEZIER(S1)(controls);
var surf = COLOR([0.8, 0.6, 0.0]) (MAP(palo)(domain2));
DRAW(surf);

/*
* Wing profile 2 : con 20 semi-curve le più estreme con curvatura minore (15cm) 
* tutte le interne con y=30cm distanziate tra loro di 32.5cm
*/

var p0 = [[10,18.5,0],[-5,21,0],[-5,19.5,0]];
var p1 = [[10,18.5,3.25],[-5,21.5,3.25],[-5,19.5,3.25]];
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p5 = p4.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p6 = p5.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p7 = p6.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p8 = p7.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p9 = p8.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p10 = p9.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p11 = p10.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p12 = p11.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p13 = p12.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p14 = p13.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p15 = p14.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p16 = p15.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p17 = p16.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p18 = p17.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p19 = p18.map(function (p) {return [p[0], p[1], p[2]+3.25]});
var p20 = [[10,18.5,61.75],[-5,21,65],[-5,19.5,61.75]];



var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);
var c8 = BEZIER(S0)(p8);
var c9 = BEZIER(S0)(p9);
var c10 = BEZIER(S0)(p10);
var c11 = BEZIER(S0)(p11);
var c12 = BEZIER(S0)(p12);
var c13 = BEZIER(S0)(p13);
var c14 = BEZIER(S0)(p14);
var c15 = BEZIER(S0)(p15);
var c16 = BEZIER(S0)(p16);
var c17 = BEZIER(S0)(p17);
var c18 = BEZIER(S0)(p18);
var c19 = BEZIER(S0)(p19);
var c20 = BEZIER(S0)(p20);
var controls = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20];

var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));

DRAW(curves);

var controls_low=[c0,c20]; //curve di controllo profilo anteriore dell'ala
var controls_left=[c0,c1]; //curve di controllo profilo chiusura sinistra
var controls_right=[c19,c20]; //curve di controllo profilo chiusura destra
var controls_up = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19]; //curve di controllo profilo superiore dell'ala

var wing_low = BEZIER(S1)(controls_low);
var surf_low = COLOR ([1, 1, 0.8, 0.99])(MAP(wing_low)(domain2));

var wing_left = BEZIER(S1)(controls_left);
var surf_left = COLOR ([0.2, 0.4, 0.2, 0.99])(MAP(wing_left)(domain2));

var wing_right = BEZIER(S1)(controls_right);
var surf_right = COLOR ([0.2, 0.4, 0.2, 0.99])(MAP(wing_right)(domain2));

var wing_up = BEZIER(S1)(controls_up);
var surf_up = COLOR ([0.2, 0.4, 0.2, 0.99])(MAP(wing_up)(domain2));

var surf = STRUCT([surf_up,surf_right,surf_left,surf_low]);
DRAW(surf);



