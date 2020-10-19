function emptyModelFeatures() {
	this.vertices = [];
	this.colors = [];
	this.normals = [];

	this.center = [];
	this.type = '';

	this.tx = 0.0;
	this.ty = 0.0;
	this.tz = 0.0;	

	this.rotAngleXX = 0.0;
	this.rotAngleYY = 0.0;
	this.rotAngleZZ = 0.0;	
	
	this.sx = 1.0;
	this.sy = 1.0;
	this.sz = 1.0;		
	
	this.rotXXOn = true;
	this.rotYYOn = true;
	this.rotZZOn = true;

	this.rotXXSpeed = 1.0;
	this.rotYYSpeed = 1.0;
	this.rotZZSpeed = 1.0;

	this.rotXXDir = 1;
	this.rotYYDir = 1;
	this.rotZZDir = 1;
	
	this.kAmbi = [ 1.0, 1.0, 1.0 ];
	this.kDiff = [ 0.7, 0.7, 0.7 ];
	this.kSpec = [ 0.7, 0.7, 0.7 ];
	this.nPhong = 100;
}

function simpleCubeModel( ) {
	var cube = new emptyModelFeatures();
	cube.vertices = [

		-1.000000, -1.000000,  1.000000,//v3
		 1.000000,  1.000000,  1.000000,//v1
		-1.000000,  1.000000,  1.000000,//v0

		-1.000000, -1.000000,  1.000000,//v3
		 1.000000, -1.000000,  1.000000,//v2
		 1.000000,  1.000000,  1.000000,//v1
        //---------------------------------//
         1.000000, -1.000000,  1.000000,//v2 
		 1.000000, -1.000000, -1.000000,//v7
		 1.000000,  1.000000, -1.000000,//v5
        
         1.000000, -1.000000,  1.000000,//v2 
         1.000000,  1.000000, -1.000000,//v5 
         1.000000,  1.000000,  1.000000,//v1
        //---------------------------------//
        -1.000000, -1.000000, -1.000000,//v7 
        -1.000000,  1.000000, -1.000000,//v4
         1.000000,  1.000000, -1.000000,//v5
        
        -1.000000, -1.000000, -1.000000,//v7
         1.000000,  1.000000, -1.000000,//v5
         1.000000, -1.000000, -1.000000,//v6 
        //---------------------------------//
        -1.000000, -1.000000, -1.000000,//v7 
		-1.000000, -1.000000,  1.000000,//v3
		-1.000000,  1.000000, -1.000000,//v0 
		
		-1.000000, -1.000000,  1.000000,//v3 
		-1.000000,  1.000000,  1.000000,//v0 
		-1.000000,  1.000000, -1.000000,//v4 
		//---------------------------------//
		-1.000000,  1.000000, -1.000000,//v4 
		-1.000000,  1.000000,  1.000000,//v0 
		 1.000000,  1.000000, -1.000000,//v5 

		-1.000000,  1.000000,  1.000000,//v0 
		 1.000000,  1.000000,  1.000000,//v1 
		 1.000000,  1.000000, -1.000000,//v5
		//---------------------------------//
		-1.000000, -1.000000,  1.000000,//v3 
		-1.000000, -1.000000, -1.000000,//v7
		 1.000000, -1.000000, -1.000000,//v6 
		
		-1.000000, -1.000000,  1.000000,//v3 
		 1.000000, -1.000000, -1.000000,//v6 
		 1.000000, -1.000000,  1.000000,//v2 	 
	];
	// computeVertexNormals( cube.vertices, cube.normals );
	return cube;
}


function cubeModel(type="cube") {
	var cube = new simpleCubeModel();
	cube.type = type;
	computeVertexNormals( cube.vertices, cube.normals );
	return cube;
}

function sphereModel( subdivisionDepth = 0 ) {
	var sphere = new cubeModel("sphere");
	midPointRefinement( sphere.vertices, colors, subdivisionDepth );
	moveToSphericalSurface( sphere.vertices )
	computeVertexNormals( sphere.vertices, sphere.normals );
	return sphere;
}


