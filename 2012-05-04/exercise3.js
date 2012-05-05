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