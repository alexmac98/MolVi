//////////////////////////////////////////////////////////////////////////////
//
//  Functions for processing triangle mesh models
//
//  J. Madeira - Oct. 2015
//
//////////////////////////////////////////////////////////////////////////////

//----------------------------------------------------------------------------
//
//  Recursive triangle subdivision, using the midpoints of edges
//

function recSubdivisionMidPoint( v1, v2, v3, 
								 c1, c2, c3,
								 coordsArray,
								 colorsArray,
								 recursionDepth ) {

	// Recursive midpoint subdivision of one triangle
	
	if( recursionDepth == 0 ) {
		
		// Storing coordinates and colors in the destination arrays
 
        coordsArray.push( v1[0], v1[1], v1[2] );
		
		coordsArray.push( v2[0], v2[1], v2[2] );
		
		coordsArray.push( v3[0], v3[1], v3[2] );
		
		colorsArray.push( c1[0], c1[1], c1[2] );
		
		colorsArray.push( c2[0], c2[1], c2[2] );
		
		colorsArray.push( c3[0], c3[1], c3[2] );	    
	}
	else {
		
		// Compute the midpoints and proceed recursively
		
        var mid12 = computeMidPoint( v1, v2 );

        var mid23 = computeMidPoint( v2, v3 );
        
        var mid31 = computeMidPoint( v3, v1 );
        
        // Colors are also averaged

        var c12 = computeMidPoint( c1, c2 );

        var c23 = computeMidPoint( c2, c3 );

        var c31 = computeMidPoint( c3, c1 );
        
        // 4 recursive calls 

        recSubdivisionMidPoint( v1, mid12, mid31, c1, c12, c31,
                                coordsArray, colorsArray, recursionDepth - 1 );

        recSubdivisionMidPoint( v2, mid23, mid12, c2, c23, c12,
                                coordsArray, colorsArray, recursionDepth - 1 );

        recSubdivisionMidPoint( v3, mid31, mid23, c3, c31, c23,
                                coordsArray, colorsArray, recursionDepth - 1 );

        recSubdivisionMidPoint( mid12, mid23, mid31, c12, c23, c31,
                                coordsArray, colorsArray, recursionDepth - 1 );
	}
}

//----------------------------------------------------------------------------
function midPointRefinement( coordsArray, 
						     colorsArray, 
							 recursionDepth ) {
	
	// Mesh refinement - Higher-level function
	
	// Each triangle is subdivided into 4 smaller ones - Lower-level recursive function
	
	// Vertices are duplicated, whenever needed !!
	
	// recursionDepth controls the final number of triangles and vertices 
    
    var origArrayLength = coordsArray.length;

    // Copying
    
    var origCoords = coordsArray.slice();
    
   	var origColors = colorsArray.slice();
    
    // Clearing the arrays
    
    coordsArray.splice( 0, origArrayLength );
    
    // colorsArray.splice( 0, origArrayLength );
    
    var origIndex;
    
    // Each triangle is recursively subdivided into 4 triangles
    
    // Iterate through the original triangular faces
    
    for( origIndex = 0; origIndex < origArrayLength; origIndex += 9 )
    {
        /* Call the recursive subdivision function */
        
        recSubdivisionMidPoint( origCoords.slice( origIndex, origIndex + 3 ),
								origCoords.slice( origIndex + 3, origIndex + 6 ),
								origCoords.slice( origIndex + 6, origIndex + 9 ),
								origColors.slice( origIndex, origIndex + 3 ),
								origColors.slice( origIndex + 3, origIndex + 6 ),
								origColors.slice( origIndex + 6, origIndex + 9 ),
								coordsArray,
								colorsArray,
								recursionDepth );
    }
}

//----------------------------------------------------------------------------
////  Recursive triangle subdivision, using the triangle centroid
//

function recSubdivisionCentroid( v1, v2, v3, 
								 c1, c2, c3,
								 coordsArray,
								 colorsArray,
								 recursionDepth ) {

	// Recursive centroid subdivision of one triangle
	
	// TO BE DONE !!

	if( recursionDepth == 0 ) {
		
		// Storing coordinates and colors in the destination arrays
 
        coordsArray.push( v1[0], v1[1], v1[2] );
		
		coordsArray.push( v2[0], v2[1], v2[2] );
		
		coordsArray.push( v3[0], v3[1], v3[2] );
		
		colorsArray.push( c1[0], c1[1], c1[2] );
		
		colorsArray.push( c2[0], c2[1], c2[2] );
		
		colorsArray.push( c3[0], c3[1], c3[2] );	    
	}
	else {
		
		// Compute the midpoints and proceed recursively
		
        var v_centroid = computeCentroid( v1, v2, v3 );
        var c_centroid = computeCentroid( c1, c2, c3 );
        
        // 3 recursive calls 

        recSubdivisionCentroid( v1, v2, v_centroid, c1, c2, c_centroid,
                                coordsArray, colorsArray, recursionDepth - 1 );

        recSubdivisionCentroid( v1, v3, v_centroid, c1, c3, c_centroid,
                                coordsArray, colorsArray, recursionDepth - 1 );

        recSubdivisionCentroid( v2, v3, v_centroid, c2, c3, c_centroid,
                                coordsArray, colorsArray, recursionDepth - 1 );

	}
}

//----------------------------------------------------------------------------

function centroidRefinement( coordsArray, 
						     colorsArray, 
							 recursionDepth ) {
	
	// Mesh refinement - Higher-level function
	
	// Each triangle is subdivided into 3 smaller ones - Lower-level recursive function
	
	// Vertices are duplicated, whenever needed !!
	
	// recursionDepth controls the final number of triangles and vertices 
    
    // TO BE DONE !!

    var origArrayLength = coordsArray.length;

    // Copying
    
    var origCoords = coordsArray.slice();
    
    var origColors = colorsArray.slice();
    
    // Clearing the arrays
    
    coordsArray.splice( 0, origArrayLength );
    
    colorsArray.splice( 0, origArrayLength );
    
    var origIndex;
    
    // Each triangle is recursively subdivided into 4 triangles
    
    // Iterate through the original triangular faces
    
    for( origIndex = 0; origIndex < origArrayLength; origIndex += 9 )
    {
        /* Call the recursive subdivision function */
        
        recSubdivisionCentroid( origCoords.slice( origIndex, origIndex + 3 ),
								origCoords.slice( origIndex + 3, origIndex + 6 ),
								origCoords.slice( origIndex + 6, origIndex + 9 ),
								origColors.slice( origIndex, origIndex + 3 ),
								origColors.slice( origIndex + 3, origIndex + 6 ),
								origColors.slice( origIndex + 6, origIndex + 9 ),
								coordsArray,
								colorsArray,
								recursionDepth );
    }

}

//----------------------------------------------------------------------------
//
//  Moving vertices to the spherical surface of radius 1
//

function moveToSphericalSurface( coordsArray ) {
	
	// Each vertex is moved to the spherical surface of radius 1
    // and centered at (0,0,0)
    
    // This is done by handling each vertex as if it were a position vector,
    // and normalizing
	
	// TO BE DONE !!
	var vec = vec3()
	for(var i = 0; i < coordsArray.length; i += 3){
		vec = normalize(coordsArray.slice(i,i+3));
		coordsArray[i] = vec[0];
		coordsArray[i+1] = vec[1];
		coordsArray[i+2] = vec[2];
	}
	return coordsArray;	
	
}

function computeVertexNormals( coordsArray, normalsArray ) {
	
	// Clearing the new normals array
	
	normalsArray.splice( 0, normalsArray.length );
	
    // Taking 3 vertices from the coordinates array 

    for( var index = 0; index < coordsArray.length; index += 9 )
    {
		// Compute unit normal vector for each triangle
			
        var normalVector = computeNormalVector( coordsArray.slice(index, index + 3),
												coordsArray.slice(index + 3, index + 6),
												coordsArray.slice(index + 6, index + 9) );

        // Store the unit normal vector for each vertex 

        for( var j = 0; j < 3; j++ )
        {
            normalsArray.push( normalVector[0], normalVector[1], normalVector[2] ); 
		}
	}
}


// by me

// bond is a long cube
function get_bond_vertices(face_src, face_dest){
	// this should've length 3
	var v0 = face_src[0];
	var v1 = face_src[1];
	var v2 = face_src[2];
	var v3 = face_src[3];

	var v4 = face_dest[0];
	var v5 = face_dest[1];
	var v6 = face_dest[2];
	var v7 = face_dest[3];

	var v = [
		// // // front
		v2[0],v2[1],v2[2],
		v1[0],v1[1],v1[2],
		v0[0],v0[1],v0[2],
		
		v0[0],v0[1],v0[2],
		v3[0],v3[1],v3[2],
		v2[0],v2[1],v2[2],

		// // back
		v6[0],v6[1],v6[2],
		v5[0],v5[1],v5[2],
		v4[0],v4[1],v4[2],

		v4[0],v4[1],v4[2],
		v7[0],v7[1],v7[2],
		v6[0],v6[1],v6[2],


		// left
		v5[0],v5[1],v5[2],
		v4[0],v4[1],v4[2],
		v0[0],v0[1],v0[2],

		v0[0],v0[1],v0[2],
		v1[0],v1[1],v1[2],
		v5[0],v5[1],v5[2],

		//right
		v6[0],v6[1],v6[2],
		v2[0],v2[1],v2[2],
		v3[0],v3[1],v3[2],

		v3[0],v3[1],v3[2],
		v7[0],v7[1],v7[2],
		v6[0],v6[1],v6[2],
		
		// top
		v5[0],v5[1],v5[2],
		v1[0],v1[1],v1[2],
		v2[0],v2[1],v2[2],
		
		v2[0],v2[1],v2[2],
		v6[0],v6[1],v6[2],
		v5[0],v5[1],v5[2],


		// bot 
		v4[0],v4[1],v4[2],
		v7[0],v7[1],v7[2],
		v3[0],v3[1],v3[2],

		v3[0],v3[1],v3[2],
		v0[0],v0[1],v0[2],
		v4[0],v4[1],v4[2],	
	
	]
	return v;


}

function get_transformed_center(v, translation, scaling){
	// center should've length of 3 [x,y,z]
	var center = get_center(v);
	// transformed_center should also have length of 3
	var transformed_center = [];
	transformed_center.push(center[0] + translation[0]);
	transformed_center.push(center[1] + translation[1]);
	transformed_center.push(center[2] + translation[2]);

	return transformed_center;	
}

function get_vertices_center(center, width=0.03){
	var x = center[0]; 
	var y = center[1];
	var z = center[2];

	var v0 = [x-width/2.0, y-width/2.0, z];
	var v1 = [x-width/2.0, y+width/2.0, z];
	var v2 = [x+width/2.0, y+width/2.0, z];
	var v3 = [x+width/2.0, y-width/2.0, z];

	return [v0,v1,v2,v3];
}
// v -> vertices
function get_center(v){
	var x = get_max_min(v, 0);
	var y = get_max_min(v, 1);
	var z = get_max_min(v, 2);

	return [
		(x.max + x.min)/2.0,
		(y.max + y.min)/2.0,
		(z.max + z.min)/2.0
	]
}


function get_max_min(vertices, idx){
	var max = -9999999;
	var min = 9999999;

	for(var i = idx; i < vertices.length; i+=3){
		if(vertices[i] > max){
			max = vertices[i];
		}
		if(vertices[i] < min){
			min = vertices[i];
		}
	}

	return {
		min: min,
		max: max
	}
}



function copy_model(model){
	var cp = cubeModel(model.vertices);

	cp.center = model.center;
	cp.vertices = copy_vector(model.vertices);
	cp.normals = copy_vector(model.normals);
	cp.tx = model.tx;
	cp.ty = model.ty;
	cp.tz = model.tz;
	cp.rotAngleXX = model.rotAngleXX;
	cp.rotAngleYY = model.rotAngleYY;
	cp.rotAngleZZ = model.rotAngleZZ;
	cp.sx = model.sx;
	cp.sy = model.sy;
	cp.sz = model.sz;

	cp.rotXXOn = model.rotXXOn;
	cp.rotYYOn = model.rotYYOn;
	cp.rotZZOn = model.rotZZOn;
	cp.rotXXSpeed = model.rotXXSpeed;
	cp.rotYYSpeed = model.rotYYSpeed;
	cp.rotZZSpeed = model.rotZZSpeed;
	cp.rotXXDir = model.rotXXDir;
	cp.rotYYDir = model.rotYYDir;
	cp.rotZZDir = model.rotZZDir;

	cp.kAmbi = model.kAmbi;
	cp.kDiff = model.kDiff;
	cp.kSpec = model.kSpec;
	cp.nPhong = model.nPhong;

	cp.colors = model.colors;

	return cp;
}