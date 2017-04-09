var camera, scene, renderer, geometry, material, mesh;
function init () {
  scene = new THREE.Scene ();
  // camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 1, 10000);
  camera = new THREE.PerspectiveCamera (75, 640/480, 1, 10000);
  camera.position.z = 500;
  scene.add(camera);
  geometry = new THREE.CubeGeometry (200, 200, 200);
  material = new THREE.MeshBasicMaterial ({color: 0xff0000, wireframe: true});
  mesh = new THREE.Mesh (geometry, material);
  scene.add(mesh);
  renderer = new THREE.CanvasRenderer ();
  // renderer.setSize (window.innerWidth, window.innerHeight);
  renderer.setSize ("1125", "750");
  // document.body.appendChild (renderer.domElement);
  $("#three").append(renderer.domElement);
}

function animate () {
  // note: three.js includes requestAnimationFrame shim
  requestAnimationFrame (animate);
  render ();
}

function render () {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  renderer.render (scene, camera);
}

  // Draw the StreetView
var makeStreetView = function (callback) {
  var streetObj = new google.maps.StreetViewPanorama(document.getElementById("streetview"),
    {
      position: {lat: 38.9929966, lng: -76.9430243},
      pov: {heading: 165, pitch: 0},
      motionTrackingControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    }
  );
  if (callback && typeof(callback) == 'function') {callback ();}
};

$(document).ready(function(){
  makeStreetView(function(){
    init ();
    animate ();
  });
});
