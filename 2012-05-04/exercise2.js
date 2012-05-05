/*
 * EXERCISE 2 - Produce the model of a single wing in a
 * local coordinate system.
 */
 
// Domain
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);

 	
//curva di controllo - big section big
	var controls = [[0,-0.5,15/2],[0,0,0],[0,2,0],[0,10,0],[0,15,15/2],[0,10,15],[0,2,15],[0,0,15],[0,-0.5,15/2]];
    var controlsT = controls.map(function (p) {return [p[0], p[1]-4, p[2]-15]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c1 = NUBS(S0)(2)(knots)(controlsT);
	var curve1 = MAP(c1)(domain1);
	//DRAW(curve1);

//curva di controllo - medium section 
	var controls = [[0,-0.25,7.5/2],[0,0,0],[0,1,0],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,7.5],[0,0,7.5],[0,-0.25,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]+40, p[1]-6, p[2]-11.25]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c2 = NUBS(S0)(2)(knots)(controlsT);
	var curve2 = MAP(c2)(domain1);
	//DRAW(curve2);

//curva di controllo - little back section
	var controls = [[0,-0.25,7.5/2],[0,0,0],[0,1,0],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,7.5],[0,0,7.5],[0,-0.25,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]+70, p[1]-8, p[2]/16-7.9625]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c3 = NUBS(S0)(2)(knots)(controlsT);
	var curve3 = MAP(c3)(domain1);
	//DRAW(curve3);

//curva di controllo - front section 
	var controls = [[0,0,7.5/2],[0,0,0],[0,1,-1],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,8.5],[0,0,7.5],[0,0,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]*2-20, p[1]*2-2, p[2]*2-15]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c4 = NUBS(S0)(2)(knots)(controlsT);
	var curve4 = MAP(c4)(domain1);
	//DRAW(curve4);

//curva di controllo - hole propeller
var controls = [[0,0,7.5/2],[0,0,0],[0,1,-1],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,8.5],[0,0,7.5],[0,0,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]/4-20, p[1]/4+3, p[2]/4-8.4125]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c5 = NUBS(S0)(2)(knots)(controlsT);
	var curve5 = MAP(c5)(domain1);
	//DRAW(curve5);

//curva di controllo per bombatura "hole propeller"
var controls = [[0,0,7.5/2],[0,0,0],[0,1,-1],[0,5,0],[0,7.5,7.5/2],[0,5,7.5],[0,1,8.5],[0,0,7.5],[0,0,7.5/2]];
    var controlsT = controls.map(function (p) {return [p[0]/2-25, p[1]/2+3, p[2]/2-9.5]});
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c6 = NUBS(S0)(2)(knots)(controlsT);
	var curve6 = MAP(c6)(domain1);
	//DRAW(curve6);


//fuseleage middle
var controls = [c4,c1]
var fusoleria1= BEZIER(S1)(controls);
var surf_fusoliera1 = COLOR ([0.2, 0.4, 0.2])(MAP(fusoleria1)(domain2));
//DRAW (surf_fusoliera1);

//fuseleage back
var controls = [c1,c2,c3]
var fusoleria2= BEZIER(S1)(controls);
var surf_fusoliera2 = COLOR ([0.2, 0.4, 0.2])(MAP(fusoleria2)(domain2));
//DRAW (surf_fusoliera2);

//fuseleage front
var controls = [c4,c6,c5]
var fusoleria3= BEZIER(S1)(controls);
var surf_fusoliera3 = COLOR ([0.2, 0.4, 0.2])(MAP(fusoleria3)(domain2));
//DRAW (surf_fusoliera3);

var fuseleage = STRUCT([surf_fusoliera1,surf_fusoliera2,surf_fusoliera3]);

DRAW (fuseleage);

