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
  requestAnimationFrame(animate);
  render();
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

function extractLocation(href) {
  var rx = /@(.*),/g;
  var arr = rx.exec(href);
  console.log(arr[1]);
  var result = arr[1].split(',');
  var location = {lat: Number((parseFloat(result[0])).toFixed(3)),lng: Number((parseFloat(result[1])).toFixed(3))};
  console.log(location);
  return location;
}

$(document).ready(function(){
  var landmark0 = {lat:38.9929,lng:-76.9430};
  var landmark1 = {lat:38.9914,lng:-76.9417};
  var landmark2 = {lat:38.9914,lng:-76.9407};
  var landmark3 = {lat:38.9926,lng:-76.9399};
  var landmark4 = {lat:38.9931,lng:-76.9398};
  makeStreetView(function(){
    init ();
    animate ();
  });
  var currentLocation = '';
  $(window).on('click', function(e) {
    var currentLocationHref = $('.gm-iv-marker a').attr('href');
    currentLocation = extractLocation(currentLocationHref);
    if (currentLocation.lat==38.993 && currentLocation.lng==-76.943) {
      console.log("First");
      $('.hint0').css('opacity',1);
      $('.hint1').css('opacity',0);
      $('.hint2').css('opacity',0);
      $('.hint3').css('opacity',0);
      $('.hint4').css('opacity',0);
    } else if (currentLocation.lat==38.991 && currentLocation.lng==-76.942) {
      console.log("Second");
      $('.hint0').css('opacity',0);
      $('.hint1').css('opacity',1);
      $('.hint2').css('opacity',0);
      $('.hint3').css('opacity',0);
      $('.hint4').css('opacity',0);
    } else if (currentLocation.lat==38.991 && currentLocation.lng==-76.941) {
      console.log("Third");
      $('.hint0').css('opacity',0);
      $('.hint1').css('opacity',0);
      $('.hint2').css('opacity',1);
      $('.hint3').css('opacity',0);
      $('.hint4').css('opacity',0);
    } else if (currentLocation.lat==38.993 && currentLocation.lng==-76.940) {
      console.log("Forth");
      $('.hint0').css('opacity',0);
      $('.hint1').css('opacity',0);
      $('.hint2').css('opacity',0);
      $('.hint3').css('opacity',1);
      $('.hint4').css('opacity',0);
    } else if (currentLocation.lat==38.994 && currentLocation.lng==-76.940) {
      console.log("Fifth");
      $('.hint0').css('opacity',0);
      $('.hint1').css('opacity',0);
      $('.hint2').css('opacity',0);
      $('.hint3').css('opacity',0);
      $('.hint4').css('opacity',1);
    } else {
      $('.hint0').css('opacity',0);
      $('.hint1').css('opacity',0);
      $('.hint2').css('opacity',0);
      $('.hint3').css('opacity',0);
      $('.hint4').css('opacity',0);
    }

  });
});
