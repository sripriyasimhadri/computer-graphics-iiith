var renderer,camera,controls,scene,stats,points;
var initialize = function(){
	    renderer = new THREE.WebGLRenderer( { antialias: false } );
	    renderer.setPixelRatio( window.devicePixelRatio );
	    renderer.setSize( window.innerWidth, window.innerHeight );
	    document.body.appendChild(renderer.domElement);
	    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,0.1,100);
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

	    var size = 15;
		var divisions = 2;
		var gridHelper = new THREE.GridHelper( size, divisions );
		gridHelper.position.set(5,5.5,1);
		scene.add( gridHelper );
		animate();
	}

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