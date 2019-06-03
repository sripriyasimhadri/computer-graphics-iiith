var renderer,camera,controls,scene,stats,points;
var initialize = function(){
	    renderer = new THREE.WebGLRenderer( { antialias: false } );
	    renderer.setPixelRatio( window.devicePixelRatio );
	    renderer.setSize( window.innerWidth, window.innerHeight );
	    document.body.appendChild(renderer.domElement);
	    let aspectRatio = window.innerWidth / window.innerHeight;
  		let frustumSize = 20;
		camera = new THREE.OrthographicCamera(frustumSize * aspectRatio / -2, frustumSize * aspectRatio / 2, frustumSize / 2, frustumSize / -2, -100, 100);
	    camera.position.y = 30;
	    controls = new THREE.OrbitControls( camera );
	    controls.damping = 0.2;
	    controls.staticMoving = false;
	    scene = new THREE.Scene();
	    stats = new Stats();
	    stats.domElement.style.position = 'absolute';
	    stats.domElement.style.top = '0px';
	    stats.domElement.style.zIndex = 100;
	    document.body.appendChild( stats.domElement );
	    window.addEventListener( 'resize', onWindowResize, false );
	    var req = new XMLHttpRequest();
	    req.open("GET","bunnyobj.txt",true);

	    var size = 15;
		var divisions = 1;
		var gridHelper = new THREE.GridHelper( size, divisions );
		gridHelper.rotation.x = -Math.PI / 6;
		gridHelper.position.set(5,5.5,1);
		scene.add( gridHelper );
	    
		var material4 = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide , transparent: true, opacity: 0.5} );
		var geometry4 = new THREE.PlaneGeometry( 1, 1, 32 );
		material4.transparent = true;
		material4.alphaTest = 0.5;
		var plane = new THREE.Mesh( geometry4, material4 );
		plane.position.set(3 , 3, -3);
		plane.rotation.x = -Math.PI / 2;
		scene.add( plane );
		var material1 = new THREE.LineBasicMaterial({
				color: 0xffffff 
		});
		var geometry1 = new THREE.Geometry();
		geometry1.vertices.push(
				new THREE.Vector3( -10.3, 10, 0 ),
				new THREE.Vector3( -10.3, -3.7, 0 ),
		);
		var line1 = new THREE.Line( geometry1, material1 );
		line1.rotation.x = -Math.PI / 2;
		//scene.add( line1 );

		var material11 = new THREE.LineBasicMaterial({
				color: 0x00ff00,
				linewidth: 2
		});
		var geometry11 = new THREE.Geometry();
		geometry11.vertices.push(
				new THREE.Vector3( -0.5, 10, 0 ),
				new THREE.Vector3( -0.5, 6.4, 0 ),
		);
		var line11 = new THREE.Line( geometry11, material11 );
		line11.rotation.x = -Math.PI / 2;
		scene.add( line11 );

		var material12 = new THREE.LineBasicMaterial({
				color: 0x00ff00, linewidth: 2
		});
		var geometry12 = new THREE.Geometry();
		geometry12.vertices.push(
				new THREE.Vector3( -0.5, 2, 0 ),
				new THREE.Vector3( -0.5, -16.4, 0 ),
		);
		var line12 = new THREE.Line( geometry12, material12 );
		line12.rotation.x = -Math.PI / 2;
		scene.add( line12 );

		var material13 = new THREE.LineBasicMaterial({
				color: 0x00ff00, linewidth: 2
		});
		var geometry13 = new THREE.Geometry();
		geometry13.vertices.push(
				new THREE.Vector3( -4.7, 10, 0 ),
				new THREE.Vector3( -4.7, -5, 0 ),
		);
		var line13 = new THREE.Line( geometry13, material13 );
		line13.rotation.x = -Math.PI / 2;
		scene.add( line13 );
		var material2 = new THREE.LineBasicMaterial({
				color: 0xffffff , linewidth: 2
		});
		var geometry2 = new THREE.Geometry();
		geometry2.vertices.push(
				new THREE.Vector3( -10.3, -3.7, 0 ),
				new THREE.Vector3( 10, -3.7, 0 ),
		);
		var line2 = new THREE.Line( geometry2, material2 );
		line2.rotation.x = -Math.PI / 2;
		//scene.add( line2 );

		var material21 = new THREE.LineBasicMaterial({
				color: 0xff0000, linewidth: 2
		});
		var geometry21 = new THREE.Geometry();
		geometry21.vertices.push(
				new THREE.Vector3( -20.3, 1.7, 0 ),
				new THREE.Vector3( 20, 1.7, 0 ),
		);
		var line21 = new THREE.Line( geometry21, material21 );
		line21.rotation.x = -Math.PI / 2;
		scene.add( line21 );

		var material22 = new THREE.LineBasicMaterial({
				color: 0xff0000, linewidth: 2
		});
		var geometry22 = new THREE.Geometry();
		geometry22.vertices.push(
				new THREE.Vector3( -13.3, -0.7, 0 ),
				new THREE.Vector3( 10, -0.7, 0 ),
		);
		var line22 = new THREE.Line( geometry22, material22 );
		line22.rotation.x = -Math.PI / 2;
		scene.add( line22 );


		var material4 = new THREE.LineDashedMaterial({
			color: 0x00ffff , linewidth : 2
		});
		var geometry4 = new THREE.Geometry();
		geometry4.vertices.push(
				new THREE.Vector3( -2, 4, -20 ),
				new THREE.Vector3( -5, -2, -10 ),
					//new THREE.Vector3( 1, 0, 0 )
		);
		var line4 = new THREE.Line( geometry4, material4 );
		line4.rotation.x = -Math.PI / 2;
		scene.add( line4 );

		var material41 = new THREE.LineDashedMaterial({
			color: 0x00ffff , linewidth : 0.4
		});
		var geometry41 = new THREE.Geometry();
		geometry41.vertices.push(
				new THREE.Vector3( 2, 2, -20 ),
				new THREE.Vector3( -3.4, -10, -10 ),
					//new THREE.Vector3( 1, 0, 0 )
		);
		var line41 = new THREE.Line( geometry41, material41 );
		line41.rotation.x = -Math.PI / 2;
		scene.add( line41 );

	    req.onload = function(){
	        var lines = this.responseText.split("\n");
	        var vertices = [];
	        var normals = [];
	        var vertexNormals = [];
	        var faces = [];
	        var vertexMap = {};
	        var scale = 50;
	        for(var i = 0; i < lines.length; i ++){
	            if(lines[i].indexOf("vn ") === 0 ){
	                var coords = lines[i].split(" ");
	                normals.push(new THREE.Vector3(parseFloat(coords[1]),parseFloat(coords[2]),parseFloat(coords[3])));
	            }
	            else if (lines[i].indexOf("v ") === 0){
	                var coords = lines[i].split(" ");
	                vertices.push(new THREE.Vector3(parseFloat(coords[1]) * scale,parseFloat(coords[2]) * scale,parseFloat(coords[3]) * scale));
	            }
	            else if (lines[i].indexOf("f ") === 0){
	                var coords = lines[i].split(" ");
	                for(var j = 1; j < coords.length; j ++){
	                    var vertNorm = coords[j].split("//");
	                    var index = parseInt(vertNorm[0]) - 1;
	                    vertexMap[index.toString()] = {
	                        v : vertices[index],
	                        n : normals[parseInt(vertNorm[1]) - 1]
	                    }
	                }
	            }
	        }
	        var tempVerts = [];
	        var tempNormals = [];
	        for(var vert in vertexMap){
	            if(vertexMap.hasOwnProperty(vert)){
	                tempVerts.push(vertexMap[vert].v);
	                tempNormals.push(vertexMap[vert].n);
	            }
	        }
	        var p = new debugParticles({
	            vertices : tempVerts,
	            normals : tempNormals
	        })
	    };
	    req.send();
	    animate();
	};


	function onWindowResize() {
	    console.log("windowresize");
	    camera.aspect = window.innerWidth / window.innerHeight;
	    camera.updateProjectionMatrix();
	    renderer.setSize( window.innerWidth, window.innerHeight );
	}

	function animate() {
	    stats.update();
	    controls.update();
	    requestAnimationFrame(animate);
	    renderer.render( scene, camera );
	}