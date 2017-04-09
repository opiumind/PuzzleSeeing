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
  console.log(href);
  var rx = /@(.*),/g;
  var arr = rx.exec(href);
  var result = arr[1].split(',');
  var location = {lat: result[0].parseInt(),lng: result[1].parseInt};
  console.log(result);
  return location;
}

$(document).ready(function(){
  var landmark0 = {lat:38.9929966,lng:-76.9430243};
  var landmark1 = {lat:38.9914569,lng:-76.9417323};
  var landmark2 = {lat:38.9914308,lng:-76.9407972};
  var landmark3 = {lat:38.992611,lng:-76.9399563};
  var landmark4 = {lat:38.9931296,lng:-76.9398171};
  makeStreetView(function(){
    init ();
    animate ();
  });
  var currentLocation = '';
  $(window).on('click', function(e) {
    var currentLocationHref = $('.gm-iv-marker a').attr('href');
    currentLocation = extractLocation(currentLocationHref);
    // if ((currentLocation.lat >= landmark0.lat - 0.0000010 
    //   || currentLocation.lat < landmark0.lat - 0.0000010) 
    //   && currentLocation.lng >= landmark0.lng - 0.0000010 
    //   || currentLocation.lng < landmark0.lng - 0.0000010)) {
    //   console.log("First loc")
    // } else if ((currentLocation.lat >= landmark0.lat - 0.0000010 
    //   || currentLocation.lat < landmark0.lat - 0.0000010) 
    //   && currentLocation.lng >= landmark0.lng - 0.0000010 
    //   || currentLocation.lng < landmark0.lng - 0.0000010)){

    // } else if ((currentLocation.lat >= landmark0.lat - 0.0000010 || currentLocation.lat < landmark0.lat - 0.0000010) &&
    //       currentLocation.lng >= landmark0.lng - 0.0000010 || currentLocation.lng < landmark0.lng - 0.0000010)) {

    // } else if ((currentLocation.lat >= landmark0.lat - 0.0000010 || currentLocation.lat < landmark0.lat - 0.0000010) &&
    //   currentLocation.lng >= landmark0.lng - 0.0000010 || currentLocation.lng < landmark0.lng - 0.0000010)) {

    // }
    if (currentLocation.lat == landmark0.lat 
      && currentLocation.lng == landmark0.lng) {
      console.log('First');
    } else if (currentLocation.lat == landmark0.lat 
      && currentLocation.lng == landmark0.lng) {
      console.log('Second');
    } else if (currentLocation.lat == landmark0.lat 
      && currentLocation.lng == landmark0.lng) {
      console.log('Third');
    } else if (currentLocation.lat == landmark0.lat 
      && currentLocation.lng == landmark0.lng) {
      console.log('Forth');
    } else if (currentLocation.lat == landmark0.lat 
      && currentLocation.lng == landmark0.lng) {
      console.log('Fifth');
    }
  });
  
//   var map = new google.maps.Map(document.getElementById("streetview"), myOptions);
//   var marker = new google.maps.Marker({
//       map: map,
//       draggable: true,
//       position: results[0].geometry.location

//   });
//   google.maps.event.addListener(marker, "click", function (event) {
//     var latitude = event.latLng.lat();
//     var longitude = event.latLng.lng();
//     console.log( latitude + ', ' + longitude );

//     radius = new google.maps.Circle({map: map,
//         radius: 100,
//         center: event.latLng,
//         fillColor: '#777',
//         fillOpacity: 0.1,
//         strokeColor: '#AA0000',
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         draggable: true,    // Dragable
//         editable: true      // Resizable
//     });

//     // Center of map
//     map.panTo(new google.maps.LatLng(latitude,longitude));

// });
});
