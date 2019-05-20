var renderer,camera,controls,scene,stats,points;
var initialize = function(){
	    renderer = new THREE.WebGLRenderer( { antialias: false } );
	    renderer.setPixelRatio( window.devicePixelRatio );
	    renderer.setSize( window.innerWidth, window.innerHeight );
	    document.body.appendChild(renderer.domElement);
	    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,0.1,100);
	    //let aspectRatio = window.innerWidth / window.innerHeight;
  		//let frustumSize = 20;
		//camera = new THREE.OrthographicCamera(frustumSize * aspectRatio / -2, frustumSize * aspectRatio / 2, frustumSize / 2, frustumSize / -2, -100, 100);
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
	    var material = new THREE.LineBasicMaterial({
				color: 0x0000ff
			});
			var geometry = new THREE.Geometry();
			geometry.vertices.push(
					new THREE.Vector3( 2.8, 2, 0 ),
					new THREE.Vector3( 10, 15, 5 ),
					//new THREE.Vector3( 1, 0, 0 )
			);

			var line = new THREE.Line( geometry, material );
			scene.add( line );

			var material1 = new THREE.LineBasicMaterial({
				color: 0x0000ff
			});
			var geometry1 = new THREE.Geometry();
			geometry1.vertices.push(
					new THREE.Vector3( 2.8, 2, 0 ),
					new THREE.Vector3( -2, 15, 5 ),
					//new THREE.Vector3( 1, 0, 0 )
			);

			var line1 = new THREE.Line( geometry1, material1 );
			scene.add( line1 );

			var material2 = new THREE.LineBasicMaterial({
				color: 0x0000ff
			});
			var geometry2 = new THREE.Geometry();
			geometry2.vertices.push(
					new THREE.Vector3( 2.8, 2, 0 ),
					new THREE.Vector3( -20,-8, 5 ),
					//new THREE.Vector3( 1, 0, 0 )
			);

			var line2 = new THREE.Line( geometry2, material2 );
			scene.add( line2 );

			var material3 = new THREE.LineBasicMaterial({
				color: 0x0000ff
			});
			var geometry3 = new THREE.Geometry();
			geometry3.vertices.push(
					new THREE.Vector3( 2.8, 2, 0 ),
					new THREE.Vector3( 45, -8, 5 ),
					//new THREE.Vector3( 1, 0, 0 )
			);

			var line3 = new THREE.Line( geometry3, material3 );
			scene.add( line3 );

			var material4 = new THREE.LineBasicMaterial({
				color: 0xff0000
			});
			var geometry4 = new THREE.Geometry();
			geometry4.vertices.push(
					new THREE.Vector3( 1.8, 1.4, 0 ),
					new THREE.Vector3( 1.8, 4.2, 0 ),
					//new THREE.Vector3( 1, 0, 0 )
			);

			//var line4 = new THREE.Line( geometry4, material4 );
			//scene.add( line4 );

			//var material5 = new THREE.LineBasicMaterial({
				//color: 0xff0000
			//});
			//var geometry5 = new THREE.Geometry();
			//geometry5.vertices.push(
					//new THREE.Vector3( 5, 3, 2 ),
					//new THREE.Vector3( 5, 5, 0 ),
					//new THREE.Vector3( 1, 0, 0 )
			//);

			//var line5 = new THREE.Line( geometry5, material5 );
			//scene.add( line5 );
			var geometry4 = new THREE.PlaneGeometry( 2, 2, 32 );
			var material4 = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe: false, side: THREE.DoubleSide} );
			var plane = new THREE.Mesh( geometry4, material4 );
			plane.position.set(3, 2.5, 0);
			scene.add( plane );

	    var req = new XMLHttpRequest();
	    req.open("GET","bunnyobj.txt",true);
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