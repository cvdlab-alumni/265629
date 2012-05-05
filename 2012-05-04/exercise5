/*
 * EXERCISE 5 
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



/*
 * EXERCISE 2 - Produce the model of a single wing in a
 * local coordinate system.
 */
// Domain
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);

 	
//parete pù grande
	var controls = [[0,-0.5,15/2],[0,0,0],[0,2,0],[0,10,0],[0,15,15/2],[0,10,15],[0,2,15],[0,0,15],[0,-0.5,15/2]];
    var controlsT = controls.map(function (p) {return [p[0], p[1]-4, p[2]-15]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c1 = NUBS(S0)(2)(knots)(controlsT);
	var curve1 = MAP(c1)(domain1);
	//DRAW(curve1);

//parete media
	var controls = [[0,-0.25,7.5/2],[0,0,0],[0,1,0],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,7.5],[0,0,7.5],[0,-0.25,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]+40, p[1]-6, p[2]-11.25]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c2 = NUBS(S0)(2)(knots)(controlsT);
	var curve2 = MAP(c2)(domain1);
	//DRAW(curve2);

//parete piccola posteriore
	var controls = [[0,-0.25,7.5/2],[0,0,0],[0,1,0],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,7.5],[0,0,7.5],[0,-0.25,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]+70, p[1]-8, p[2]/16-7.9625]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c3 = NUBS(S0)(2)(knots)(controlsT);
	var curve3 = MAP(c3)(domain1);
	//DRAW(curve3);

//parete anteriore più tondeggiante
	var controls = [[0,0,7.5/2],[0,0,0],[0,1,-1],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,8.5],[0,0,7.5],[0,0,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]*2-20, p[1]*2-2, p[2]*2-15]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c4 = NUBS(S0)(2)(knots)(controlsT);
	var curve4 = MAP(c4)(domain1);
	//DRAW(curve4);

//attacco elica
var controls = [[0,0,7.5/2],[0,0,0],[0,1,-1],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,8.5],[0,0,7.5],[0,0,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]/4-20, p[1]/4+3, p[2]/4-8.4125]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c5 = NUBS(S0)(2)(knots)(controlsT);
	var curve5 = MAP(c5)(domain1);
	//DRAW(curve5);
//curva di controllo per bombatura attacco elica
var controls = [[0,0,7.5/2],[0,0,0],[0,1,-1],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,8.5],[0,0,7.5],[0,0,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]/2-25, p[1]/2+3, p[2]/2-9.5]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c6 = NUBS(S0)(2)(knots)(controlsT);
	var curve6 = MAP(c6)(domain1);
	//DRAW(curve6);



var controls = [c4,c1]
var fusoleria= BEZIER(S1)(controls);
var surf_fusoliera = COLOR ([0.2, 0.4, 0.2])(MAP(fusoleria)(domain2));
DRAW (surf_fusoliera);

var controls = [c1,c2,c3]
var fusoleria= BEZIER(S1)(controls);
var surf_fusoliera = COLOR ([0.2, 0.4, 0.2])(MAP(fusoleria)(domain2));
DRAW (surf_fusoliera);

var controls = [c4,c6,c5]
var fusoleria= BEZIER(S1)(controls);
var surf_fusoliera = COLOR ([0.2, 0.4, 0.2])(MAP(fusoleria)(domain2));
DRAW (surf_fusoliera);






// Domain
var domain1 = INTERVALS(1)(2);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([2,30,30]);


// Spoiler left : 

var p0 = [[65,-3,-7.7],[70,-3,-8.9],[75,-8,-4.5]];
var p1 = [[65,-3,-4.5],[70,-3,-4.5],[75,-8,-4.5]];
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]+3]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]+3]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]+3]});
var p5 = [[67,-3,6.5],[68,-3,7],[69,-3,7.2],[70,-3,7.2],[71,-5,7],[72,-5,6.5]];

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);

var controls = [c0,c1,c2,c3,c4,c5];

var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));

//DRAW(curves);

var controls_wing_up = [c0,c1,c2,c3,c4,c5]; //curve di controllo profilo superiore dell'ala

var wing = BEZIER(S1)(controls_wing_up);
var surf = COLOR ([0.2, 0.4, 0.2])(MAP(wing)(domain3));

DRAW(surf);

// Spoiler right : 

var p0 = [[65,-3,-7.7],[70,-3,-6.7],[75,-8,-10.5]];
var p1 = [[65,-3,-10.5],[70,-3,-10.5],[75,-8,-10.5]];
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]-3]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]-3]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]-3]});
var p5 = [[67,-3,-21.5],[68,-3,-22],[69,-3,-22.2],[70,-3,-22.2],[71,-5,-22],[72,-5,-21.5]];

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);

var controls = [c0,c1,c2,c3,c4,c5];

//var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));
//DRAW(curves);

var controls_wing_up = [c0,c1,c2,c3,c4,c5]; //curve di controllo profilo superiore dell'ala

var wing = BEZIER(S1)(controls_wing_up);
var surf = COLOR ([0.2, 0.4, 0.2])(MAP(wing)(domain3));

DRAW(surf);



/*
 * EXERCISE 3 
 */

 // Domain
var domain1 = INTERVALS(1)(2);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([2,30,30]);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);


// Orizzontal stabilizer left : 

var p0 = [[65,-3,-7.7],[70,-3,-8.9],[75,-8,-4.5]];
var p1 = [[65,-3,-4.5],[70,-3,-4.5],[75,-8,-4.5]];
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]+3]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]+3]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]+3]});
var p5 = [[67,-3,6.5],[68,-3,7],[69,-3,7.2],[70,-3,7.2],[71,-5,7],[72,-5,6.5]];

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);

var controls = [c0,c1,c2,c3,c4,c5];

var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));

//DRAW(curves);

var controls_wing_up = [c0,c1,c2,c3,c4,c5]; //curve di controllo profilo superiore dell'ala

var wing = BEZIER(S1)(controls_wing_up);
var surf = COLOR ([0.2, 0.4, 0.2])(MAP(wing)(domain3));

DRAW(surf);

// Orizzontal stabilizer right : 

var p0 = [[65,-3,-7.7],[70,-3,-6.7],[75,-8,-10.5]];
var p1 = [[65,-3,-10.5],[70,-3,-10.5],[75,-8,-10.5]];
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]-3]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]-3]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]-3]});
var p5 = [[67,-3,-21.5],[68,-3,-22],[69,-3,-22.2],[70,-3,-22.2],[71,-5,-22],[72,-5,-21.5]];

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);

var controls = [c0,c1,c2,c3,c4,c5];

//var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));
//DRAW(curves);

var controls_wing_up = [c0,c1,c2,c3,c4,c5]; //curve di controllo profilo superiore dell'ala

var wing = BEZIER(S1)(controls_wing_up);
var surf = COLOR ([0.2, 0.4, 0.2])(MAP(wing)(domain3));

DRAW(surf);


//Vertical stabilizer parte a

	var controls1a = [[0,0,0],[0,10,0],[0,10,0],[-6.6,11.6,0],[-8.3,15,0],[-6.6,18.3,0],[0,19,0]];
    var controlsT1a = controls1a.map(function (p) {return [p[0]/2+70, p[1]/1.5-8, p[2]/2-7.5]});
	var knots = [0,0,0,1,2,3,4,5,5,5];
	var c1a = NUBS(S0)(2)(knots)(controlsT1a);
	var curve1a = MAP(c1a)(domain1);
	//DRAW(curve1a);

	
	var controls2a = [[0,0,0],[0,10,0],[0,15,0],[0,19,0]];
    var controlsT2a = controls2a.map(function (p) {return [p[0]/2+70, p[1]/1.5-8, p[2]/2-7.5]});
	var knots = [0,0,0,1,2,2,2];
	var c2a = NUBS(S0)(2)(knots)(controlsT2a);
	var curve2a = MAP(c2a)(domain1);
	//DRAW(curve2a);

var controls = [c1a,c2a]
var wing_a= BEZIER(S1)(controls);
var surf_a = COLOR ([1, 0, 0])(MAP(wing_a)(domain2));
DRAW (surf_a);


//Vertical stabilizer parte b
var controls1b = [[0,0,0],[6.6,0,0],[10,1.6,0],[10,1.6,0],[10,16.6,0]];
    var controlsT1b = controls1b.map(function (p) {return [p[0]/2+70, p[1]/1.5-8, p[2]/2-7.5]});
	var knots = [0,0,0,1,2,3,3,3];
	var c1b = NUBS(S0)(2)(knots)(controlsT1b);
	var curve1b = MAP(c1b)(domain1);
	//DRAW(curve1a);

	
	var controls2b = [[0,0,0],[0,10,0],[0,15,0],[0,19,0],[0,19,0],[6.6,18.3,0],[10,16.6,0]];
   var controlsT2b = controls2b.map(function (p) {return [p[0]/2+70, p[1]/1.5-8, p[2]/2-7.5]});
	var knots = [0,0,0,1,2,3,4,5,5,5];
	var c2b = NUBS(S0)(2)(knots)(controlsT2b);
	var curve2b = MAP(c2b)(domain1);
	//DRAW(curve2a);

var controls = [c1b,c2b]
var wing_b= BEZIER(S1)(controls);
var surf_b = COLOR ([1, 1, 1])(MAP(wing_b)(domain2));
DRAW (surf_b);

//Vertical stabilizer parte c
var controls1c = [[10,1.6,0],[10,10,0],[10,16.6,0]];
    var controlsT1c = controls1c.map(function (p) {return [p[0]/2+70, p[1]/1.5-8, p[2]/2-7.5]});
	var knots = [0,0,0,1,1,1];
	var c1c = NUBS(S0)(2)(knots)(controlsT1c);
	var curve1c = MAP(c1c)(domain1);
	//DRAW(curve1a);

	
	var controls2c = [[10,16.6,0],[19,10,0],[10,1.6,0]];
    var controlsT2c = controls2c.map(function (p) {return [p[0]/2+70, p[1]/1.5-8, p[2]/2-7.5]});
	var knots = [0,0,0,1,1,1];
	var c2c = NUBS(S0)(2)(knots)(controlsT2c);
	var curve2c = MAP(c2c)(domain1);
	//DRAW(curve2a);

var controls = [c1c,c2c]
var wing_c= BEZIER(S1)(controls);
var surf_c = COLOR ([0, 0, 1])(MAP(wing_c)(domain2));
DRAW (surf_c);

/*
 * Replica delle ali
 */

// Domain
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);


/*
* Wing profile 1 : con 20 semi-curve le più estreme con curvatura minore (15cm) 
* tutte le interne con y=30cm distanziate tra loro di 32.5cm
*/

var p0 = [[15,-1,-9.5],[0,1.5,0],[0,0,-9.5]];
var p1 = [[15,-1,-3.25],[0,3,-3.25],[0,0,-3.25]];
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p5 = p4.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p6 = p5.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p7 = p6.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p8 = p7.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p9 = p8.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p10 = p9.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p11 = p10.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p12 = p11.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p13 = p12.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p14 = p13.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p15 = p14.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p16 = p15.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p17 = p16.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p18 = p17.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p19 = p18.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p20 = [[15,-1,-61.75],[0,1.5,-65],[0,0,-61.75]];



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

var controlSide1 = [[5,1,-50],[0,20,-50],[1,0,0],[-1,0,0]]; // p0, p1, t0, t1
var controlSide2 = [[5,1,-50],[0,20,-50],[-1,0,0],[1,0,0]];
var controlSide3 = [[5,1,-50],[0,20,-50],[0,0,1],[0,0,-1]]; // p0, p1, t0, t1
var controlSide4 = [[5,1,-50],[0,20,-50],[0,0,-1],[0,0,1]];
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

var controlSide1 = [[10,0,-50],[5,19,-50],[1,0,0],[-1,0,0]]; // p0, p1, t0, t1
var controlSide2 = [[10,0,-50],[5,19,-50],[-1,0,0],[1,0,0]];
var controlSide3 = [[10,0,-50],[5,19,-50],[0,0,1],[0,0,-1]]; // p0, p1, t0, t1
var controlSide4 = [[10,0,-50],[5,19,-50],[0,0,-1],[0,0,1]];
var c1 = CUBIC_HERMITE(S0)(controlSide1);
var c2 = CUBIC_HERMITE(S0)(controlSide2);
var c3 = CUBIC_HERMITE(S0)(controlSide3);
var c4 = CUBIC_HERMITE(S0)(controlSide4);

var controls = [c1,c2,c3,c4];
var palo = BEZIER(S1)(controls);
var surf = COLOR([0.8, 0.6, 0.0]) (MAP(palo)(domain2));
DRAW(surf);

//Pali di raccordo 3

var controlSide1 = [[5,1,-25],[0,20,-25],[1,0,0],[-1,0,0]]; // p0, p1, t0, t1
var controlSide2 = [[5,1,-25],[0,20,-25],[-1,0,0],[1,0,0]];
var controlSide3 = [[5,1,-25],[0,20,-25],[0,0,1],[0,0,-1]]; // p0, p1, t0, t1
var controlSide4 = [[5,1,-25],[0,20,-25],[0,0,-1],[0,0,1]];
var c1 = CUBIC_HERMITE(S0)(controlSide1);
var c2 = CUBIC_HERMITE(S0)(controlSide2);
var c3 = CUBIC_HERMITE(S0)(controlSide3);
var c4 = CUBIC_HERMITE(S0)(controlSide4);

var controls = [c1,c2,c3,c4];
var palo = BEZIER(S1)(controls);
var surf = COLOR([0.8, 0.6, 0.0]) (MAP(palo)(domain2));
DRAW(surf);

//Pali di raccordo 4

var controlSide1 = [[10,0,-25],[5,19,-25],[1,0,0],[-1,0,0]]; // p0, p1, t0, t1
var controlSide2 = [[10,0,-25],[5,19,-25],[-1,0,0],[1,0,0]];
var controlSide3 = [[10,0,-25],[5,19,-25],[0,0,1],[0,0,-1]]; // p0, p1, t0, t1
var controlSide4 = [[10,0,-25],[5,19,-25],[0,0,-1],[0,0,1]];
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

var p0 = [[10,18.5,-9],[-5,21,-9],[-5,19.5,-9]];
var p1 = [[10,18.5,-12.25],[-5,21.5,-12.25],[-5,19.5,-12.25]];
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p5 = p4.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p6 = p5.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p7 = p6.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p8 = p7.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p9 = p8.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p10 = p9.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p11 = p10.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p12 = p11.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p13 = p12.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p14 = p13.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p15 = p14.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p16 = p15.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p17 = p16.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p18 = p17.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p19 = p18.map(function (p) {return [p[0], p[1], p[2]-3.25]});
var p20 = [[10,18.5,-70.75],[-5,21,-74],[-5,19.5,-70.75]];



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


/*
 * Ala di raccordo
 */

// Domain
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);


/*
* Wing profile 1 : con 20 semi-curve le più estreme con curvatura minore (15cm) 
* tutte le interne con y=30cm distanziate tra loro di 32.5cm
*/

var p0 = [[10,18.5,0],[-5,21,0],[-5,19.5,0]];
var p1 = [[5,18.5,-3],[-5,21,-3],[-5,19.5,-3]];
var p2 = [[5,18.5,-6],[-5,21,-6],[-5,19.5,-6]];
var p3 = [[10,18.5,-9],[-5,21,-9],[-5,19.5,-9]];



var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);

var controls = [c0,c1,c2,c3];

var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));

DRAW(curves);

var controlsa=[c0,c1]; 
var controlsb=[c1,c2]; 
var controlsc=[c2,c3]; 

var winga = BEZIER(S1)(controls);
var surfa = COLOR ([0.2, 0.4, 0.2, 0.99])(MAP(winga)(domain2));
var wingb = BEZIER(S1)(controlsb);
var surfb = COLOR ([0.2, 0.4, 0.2, 0.99])(MAP(wingb)(domain2));
var wingc = BEZIER(S1)(controlsc);
var surfc = COLOR ([0.2, 0.4, 0.2, 0.99])(MAP(wingc)(domain2));

var surf = STRUCT([surfa,surfb,surfc]);

DRAW(surf);

// Domain
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);

// Propeller

//ELICA1

var p1 = [[-22,0,0],[-22,0,3],[-21,2,5],[-22,0,0]];
var p1T = p1.map(function (p) {return [p[0]*2+20, p[1]*2+4.5, p[2]*2-7.5]});
var p2 = [[-21,0,0],[-21,2,5],[-22,0,3],[-21,0,0]];
var p2T = p2.map(function (p) {return [p[0]*2+20, p[1]*2+4.5, p[2]*2-7.5]});
var p3 = [[-22,0,0],[-22,0,3,],[-21,2,5],[-22,0,0]];
var p3T = p3.map(function (p) {return [p[0]*2+20, p[1]*2+4.5, p[2]*2-7.5]});


var c1 = BEZIER(S0)(p1T);
var c2 = BEZIER(S0)(p2T);
var c3 = BEZIER(S0)(p3T);

var controls = [c1,c2,c3]

var wing = BEZIER(S1)(controls);
var surf = MAP(wing)(domain2);
DRAW(surf);

//ELICA2

var p1 = [[-22,0,0],[-22,-2,-5],[-22,0,-3],[-22,0,0]];
var p1T = p1.map(function (p) {return [p[0]*2+20, p[1]*2+4.5, p[2]*2-7.5]});
var p2 = [[-21,0,0],[-21,0,-3],[-21,-2,-5],[-21,0,0]];
var p2T = p2.map(function (p) {return [p[0]*2+20, p[1]*2+4.5, p[2]*2-7.5]});
var p3 = [[-22,0,0],[-22,-2,-5],[-22,0,-3],[-22,0,0]];
var p3T = p3.map(function (p) {return [p[0]*2+20, p[1]*2+4.5, p[2]*2-7.5]});

var c1 = BEZIER(S0)(p1T);
var c2 = BEZIER(S0)(p2T);
var c3 = BEZIER(S0)(p3T);

var controls = [c1,c2,c3]

var wing = BEZIER(S1)(controls);
var surf = MAP(wing)(domain2);
DRAW(surf);

//ELICA3

var p1 = [[-22,0,0],[-22,0,3],[-21,2,5],[-22,0,0]];
var p1T = p1.map(function (p) {return [p[0]*2+20, -p[1]*2+4.5, p[2]*2-7.5]});
var p2 = [[-21,0,0],[-21,2,5],[-22,0,3],[-21,0,0]];
var p2T = p2.map(function (p) {return [p[0]*2+20, -p[1]*2+4.5, p[2]*2-7.5]});
var p3 = [[-22,0,0],[-22,0,3,],[-21,2,5],[-22,0,0]];
var p3T = p3.map(function (p) {return [p[0]*2+20, -p[1]*2+4.5, p[2]*2-7.5]});

var c1 = BEZIER(S0)(p1T);
var c2 = BEZIER(S0)(p2T);
var c3 = BEZIER(S0)(p3T);

var controls = [c1,c2,c3]

var wing = BEZIER(S1)(controls);
var surf = MAP(wing)(domain2);
DRAW(surf);

//ELICA4

var p1 = [[-22,0,0],[-22,-2,-5],[-22,0,-3],[-22,0,0]];
var p1T = p1.map(function (p) {return [p[0]*2+20, -p[1]*2+4.5, p[2]*2-7.5]});
var p2 = [[-21,0,0],[-21,0,-3],[-21,-2,-5],[-21,0,0]];
var p2T = p2.map(function (p) {return [p[0]*2+20, -p[1]*2+4.5, p[2]*2-7.5]});
var p3 = [[-22,0,0],[-22,-2,-5],[-22,0,-3],[-22,0,0]];
var p3T = p3.map(function (p) {return [p[0]*2+20, -p[1]*2+4.5, p[2]*2-7.5]});

var c1 = BEZIER(S0)(p1T);
var c2 = BEZIER(S0)(p2T);
var c3 = BEZIER(S0)(p3T);

var controls = [c1,c2,c3]

var wing = BEZIER(S1)(controls);
var surf = MAP(wing)(domain2);
DRAW(surf);

// Airstrip
var floor1 = T([0,1,2])([-250,-10,-250])(COLOR ([0.4, 0.4, 0.4]) (SIMPLEX_GRID([

	[400],
	[1],
	[-200,95,-10,95,-200]
	
	
])));

var floor2 = T([0,1,2])([-250,-10,-250])(COLOR ([0.4, 0.8, 0]) (SIMPLEX_GRID([

	[400],
	[1],
	[200,-200,200]
	
	
])));
var floor3 = T([0,1,2])([-250,-10,-250])(COLOR ([1, 1, 1]) (SIMPLEX_GRID([

	[25,-25,25,-25 ,25,-25,25,-25,25,-25,25,-25,25,-25,25,-25],
	[1],
	[-295,10,-295]
	
	
])));
var floor4 = T([0,1,2])([-250,-10,-250])(COLOR ([0.4, 0.4, 0.4]) (SIMPLEX_GRID([

	[-25,25,-25,25,-25 ,25,-25,25,-25,25,-25,25,-25,25,-25,25],
	[1],
	[-295,10,-295]
	
	
])));

var airstrip = STRUCT ([floor1,floor2,floor3,floor4]);
DRAW (airstrip);




// SEGNALETICA



var luce = T([0,1,2])([-200,-10,-50])(COLOR ([1.0, 1.0, 0.0]) (SIMPLEX_GRID([

	[3,-50,3,-50,3,-50,3,-50,3,-50,3,-50,3,-50],
	[3],
	[3, -195 , 3]
	
	
])));
DRAW(luce);