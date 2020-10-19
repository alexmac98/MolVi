var molecule = null;
var projectionMatrix = mat4();
var mvMatrix = mat4();

var mouse_down = false;
var wheeling = false;
var molecule_chosen = false; 



var gl = null; // WebGL context
var shaderProgram = null;
var triangleVertexPositionBuffer = null;
var triangleVertexColorBuffer = null;
var triangleVertexNormalBuffer = null;

// The GLOBAL transformation parameters
var globalTz = -2.5;
var globalTx = 0; // used for zooming properly
var globalTy = 0;

// The local transformation parameters
// The translation vector
var tx = 0.0;
var ty = 0.0;
var tz = 0.0;

// The rotation angles in degrees
var angleXX = 0.0;
var angleYY = 0.0;
var angleZZ = 0.0;

// The scaling factors
var sx = 0.5;
var sy = 0.5;
var sz = 0.5;

// NEW - GLOBAL Animation controls
var globalAngleXX = 0;
var globalAngleYY = 0;
var globalAngleZZ = 0;

var globalRotationYY_ON = 0;
var globalRotationYY_DIR = 0;
var globalRotationYY_SPEED = 1;

var globalRotationXX_ON = 0;
var globalRotationXX_DIR = 0;
var globalRotationXX_SPEED = 1;

var globalRotationZZ_ON = 0;
var globalRotationZZ_DIR = 0;
var globalRotationZZ_SPEED = 1;



// NEW - Local Animation controls
var rotationXX_ON = 0;
var rotationXX_DIR = 1;
var rotationXX_SPEED = 1;

var rotationYY_ON = 0;
var rotationYY_DIR = 1;
var rotationYY_SPEED = 1;

var rotationZZ_ON = 0;
var rotationZZ_DIR = 1;
var rotationZZ_SPEED = 1;

// To allow choosing the way of drawing the model triangles
var primitiveType = null;
// To allow choosing the projection type
var projectionType = 0;

// It has to be updated according to the projection type
var pos_Viewer = [ 0.0, 0.0, 0.0, 1.0 ];

// NEW --- Point Light Source Features

// Directional --- Homogeneous coordinate is ZERO

var pos_Light_Source = [ 0.0, 0.0, 1.0, 0.0 ];

// White light

var int_Light_Source = [ 1.0, 1.0, 1.0 ];

// Low ambient illumination

var ambient_Illumination = [ 0.3, 0.3, 0.3 ];

// controls zoom
var zoom = 45;
// For storing the vertices defining the triangles
// vertices of a square

// And their color
var colors = [

		 // FRONT FACE
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,		 			 
		 // TOP FACE
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,	
		 			 
		 // BOTTOM FACE
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,	
		 			 
		 // LEFT FACE
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,	
		 
		 			 
		 // RIGHT FACE
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,	
		 
		 			 
		 // BACK FACE
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 	
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,		 			 
];

var normals = [];
