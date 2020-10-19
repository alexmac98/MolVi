var projectionMatrix = mat4();
var mvMatrix = mat4();


// converts #RRGGBB in an array [R,G,B]
function get_colors(color){
	// color example -> #33BB33
	var r = color.substring(1,3);
	var g = color.substring(3,5);
	var b = color.substring(5,7);

	r = parseInt(r, 16)/255.0;
	g = parseInt(g, 16)/255.0;
	b = parseInt(b, 16)/255.0;
	
	return [r,g,b];
}

// sets the perspective
function set_perspective(){
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	projectionMatrix = perspective(45, 1, 0.05, 2000);

	// NEW --- The viewer is on (0,0,0)
		
	pos_Viewer[0] = pos_Viewer[1] = pos_Viewer[2] = 0.0;
	pos_Viewer[3] = 1.0;  

	var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
	gl.uniformMatrix4fv(pUniform, false, new Float32Array(flatten(projectionMatrix)));
}

var atom_model = sphereModel(3); // model to draw atoms -> sphere model
var bond_model = sphereModel(0); // model to draw the bonds

// draw molecule (or draw scene)
function set_bond_color(bond){
	var bond_color = '#ffffff';
	if(bond.length > 1){
		if(bond[1] == 2){ // if double bond
			bond_color = '#FED85D'; // color Dandelion -> D is for Double -> yellowish
		}else if(bond[1] == 3){ // if triple bond
			bond_color = '##008080'; // color Teal -> T is for triple -> blueish
		}
	}

	return bond_color;
}

// draw functions
var print = 0;

function draw_atom(model, mvMatrix, pos, radius, color){
	model.tx = pos[0]*0.1 + tx;
	model.ty = pos[1]*0.1 + ty;
	model.tz = pos[2]*0.1 + tz;
	model.sx = radius*0.05;
	model.sy = radius*0.05;
	model.sz = radius*0.05;
	var translation = [model.tx, model.ty, model.tz];
	var scaling = [model.sx, model.sy, model.sz];

 	model.center = get_transformed_center(model.vertices, translation, scaling);
	drawModel(model, mvMatrix, primitiveType, get_colors(color));
}

var print = 0;

function draw_bond(bond_model, model_src, model_dest, mvMatrix, color){
	var trans_src = [model_src.tx, model_src.ty, model_src.tz];
	var scal_src = [model_src.sx, model_src.sy, model_src.sz];
	var trans_dest = [model_dest.tx, model_dest.ty, model_dest.tz];
	var scal_dest = [model_dest.sx, model_dest.sy, model_dest.sz];

	var center_src = model_src.center;
	var center_dest = model_dest.center;

	var face_src = get_vertices_center(center_src);
	var face_dest = get_vertices_center(center_dest);

	var v = get_bond_vertices(face_src, face_dest);

	bond_model.vertices = v;

	drawModel(bond_model, mvMatrix, primitiveType, get_colors(color));
}

function draw_molecule(molecule) {
	set_perspective();

	// GLOBAL TRANSFORMATION FOR THE WHOLE SCENE
	var mvMatrix = translationMatrix(globalTx,globalTy,globalTz);

	// geometry stores the atoms used and their bonds
 	var geometry = molecule["geometry"];
 	var atom_dict, atom;
	var src_cube, dest_cube;
	var models = []
	var bonds, bond_idx;
 	var model_src, model_dest;
 	var atom_model_copy;
 	var bond_color = '#ffffff';
 	var atom;

 	mvMatrix = mult(mvMatrix, rotationXXMatrix(globalAngleXX));
 	mvMatrix = mult(mvMatrix, rotationYYMatrix(globalAngleYY));
 	mvMatrix = mult(mvMatrix, rotationZZMatrix(globalAngleZZ));

 	// draw atoms
 	
 	if(geometry == null){
 		atom = molecule;
 		draw_atom(atom_model, mvMatrix, atom["position"], atom["radius"], atom["color"]);
 	}else{
 		for(var i=0; i < geometry.length; i++){
	 		atom_dict = geometry[i];
	 		bonds = atom_dict["bonds"]; // [[0], [1]] 
			atom = atom_dict["atom"];

			// draw the atom
			draw_atom(atom_model, mvMatrix, atom_dict["position"], atom["radius"], atom["color"]);
	 		atom_model_copy = copy_model(atom_model);
	 		models.push(atom_model_copy);

	 		for(var j = 0; j < bonds.length; j++){
	 			bond_idx = bonds[j][0];
	 			// if not single bond
	 			bond_color = set_bond_color(bonds[j]);
	 			model_src = atom_model_copy;
	 			model_dest = copy_model(models[bond_idx]);
	 			draw_bond(bond_model, model_src, model_dest, mvMatrix, bond_color);
	 			bond_color = "#ffffff";
	 		}
 		}

 	}
 	
}

function drawModel(model, mvMatrix, primitiveType, color) {

    // Pay attention to transformation order !!
	initBuffers(model);

	mvMatrix = mult( mvMatrix, translationMatrix( model.tx, model.ty, model.tz ) );
	mvMatrix = mult( mvMatrix, rotationZZMatrix( angleZZ ) );
	mvMatrix = mult( mvMatrix, rotationYYMatrix( angleYY ) );
	mvMatrix = mult( mvMatrix, rotationXXMatrix( angleXX ) );
	mvMatrix = mult( mvMatrix, scalingMatrix( model.sx, model.sy, model.sz ) );
						 
	// Passing the Model View Matrix to apply the current transformation
	var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
	gl.uniformMatrix4fv(mvUniform, false, new Float32Array(flatten(mvMatrix)));

	// Multiplying the reflection coefficents
    
    var ambientProduct = mult(model.kAmbi, ambient_Illumination );
    
    var diffuseProduct = mult( model.kDiff, int_Light_Source );
    
    var specularProduct = mult( model.kSpec, int_Light_Source );

	// Partial illumonation terms and shininess Phong coefficient
	
	gl.uniform3fv( gl.getUniformLocation(shaderProgram, "ambientProduct"), 
		flatten(ambientProduct) );
    
    gl.uniform3fv( gl.getUniformLocation(shaderProgram, "diffuseProduct"),
        flatten(diffuseProduct) );
    
    gl.uniform3fv( gl.getUniformLocation(shaderProgram, "specularProduct"),
        flatten(specularProduct) );

	gl.uniform1f( gl.getUniformLocation(shaderProgram, "shininess"), 
		model.nPhong );

	//Position of the Light Source
	
	gl.uniform4fv( gl.getUniformLocation(shaderProgram, "lightPosition"),
        flatten(pos_Light_Source) );


	// Drawing the contents of the vertex buffer
	var colorUniformLocation = gl.getUniformLocation(shaderProgram, "vertexColor"); 
	gl.uniform4f(colorUniformLocation, color[0], color[1], color[2], 1);
	gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);


}


var print = 0;
function initBuffers(model) {
	// Vertex Coordinates

	triangleVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(model.vertices), gl.STATIC_DRAW);

	triangleVertexPositionBuffer.itemSize = 3;
	triangleVertexPositionBuffer.numItems = model.vertices.length / 3;

	// Associating to the vertex shader
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
			triangleVertexPositionBuffer.itemSize, 
			gl.FLOAT, false, 0, 0);

	// Vertex Normal Vectors
		
	triangleVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexNormalBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(model.normals), gl.STATIC_DRAW);
	triangleVertexNormalBuffer.itemSize = 3;
	triangleVertexNormalBuffer.numItems = model.normals.length / 3;		

	// Associating to the vertex shader
	
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, 
			triangleVertexNormalBuffer.itemSize, 
			gl.FLOAT, false, 0, 0);	

}


//----------------------------------------------------------------------------

//  Drawing the model



//
//  NEW --- Animation
//

// Animation --- Updating transformation parameters

var lastTime = 0;

function animate() {
	var timeNow = new Date().getTime();
	if( lastTime != 0 ) {
		var elapsed = timeNow - lastTime;
		// Global rotation

		if( globalRotationYY_ON ) {
			globalAngleYY += globalRotationYY_DIR * globalRotationYY_SPEED * (90 * elapsed) / 1000.0;
	    }
	    if( globalRotationXX_ON ) {
			globalAngleXX += globalRotationXX_DIR * globalRotationXX_SPEED * (90 * elapsed) / 1000.0;
	    }
		

		// Local rotations
		if( rotationXX_ON ) {
			angleXX += rotationXX_DIR * rotationXX_SPEED * (90 * elapsed) / 1000.0;
	    }
		if( rotationYY_ON ) {
			angleYY += rotationYY_DIR * rotationYY_SPEED * (90 * elapsed) / 1000.0;
	    }

		if( rotationZZ_ON ) {
			angleZZ += rotationZZ_DIR * rotationZZ_SPEED * (90 * elapsed) / 1000.0;
		}
		
	}
	lastTime = timeNow;
}


//----------------------------------------------------------------------------
//
// NEW - To count the number of frames per second (fps)
//

var elapsedTime = 0;

var frameCount = 0;

var lastfpsTime = new Date().getTime();;


function countFrames() {
	
   var now = new Date().getTime();

   frameCount++;
   
   elapsedTime += (now - lastfpsTime);

   lastfpsTime = now;

   if(elapsedTime >= 1000) {
	   
       fps = frameCount;
       
       frameCount = 0;
       
       elapsedTime -= 1000;
	   
	   document.getElementById('fps').innerHTML = 'fps:' + fps;
   }
}


//----------------------------------------------------------------------------

// Timer

function tick() {
	requestAnimFrame(tick);
	if(molecule == null){
		molecule = water;
	}

	if(mouse_down || wheeling || molecule_chosen){
		draw_molecule(molecule);
		animate();	
		molecule_chosen = false;
	}		
}

function initWebGL( canvas ) {
	try {
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		primitiveType = gl.TRIANGLES;
		gl.enable( gl.CULL_FACE );
		gl.cullFace( gl.BACK );
		gl.enable(gl.DEPTH_TEST);
	} catch (e) {
	}
	if (!gl) {
		alert("Could not initialise WebGL, sorry! :-(");
	}        
}

//----------------------------------------------------------------------------

function runWebGL() {
	var canvas = document.getElementById("my-canvas");
	initWebGL( canvas );
	shaderProgram = initShaders( gl );
	setEventListeners();
	draw_molecule(water);
	tick();
}



