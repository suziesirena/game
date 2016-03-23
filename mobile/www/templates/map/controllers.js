
var myLocation;

appControllers.controller('mapCtrl', ['$rootScope', '$scope', '$mdToast', function ($rootScope, $scope, $mdToast) {
  const GORYOKAKU_JAPAN = new plugin.google.maps.LatLng(41.796875,140.757007);

    var map;
    var div = document.getElementById("map_canvas");
    var myLocation;

    var mapOptions = {
    'backgroundColor': 'white',
    'mapType': plugin.google.maps.MapTypeId.HYBRID,
    'controls': {
      'compass': true,
      'myLocationButton': true,
      'indoorPicker': true,
      'zoom': true
    },
    'gestures': {
      'scroll': true,
      'tilt': true,
      'rotate': true,
      'zoom': true
    },
    'camera': {
      'latLng': GORYOKAKU_JAPAN,
      'tilt': 30,
      'zoom': 15,
      'bearing': 50
    }
  };

    map = plugin.google.maps.Map.getMap(div ,mapOptions);
    map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);

  function onMapReady() {

      map.getMyLocation(function(location) {
      var msg = ["Current your location:\n",
        "latitude:" + location.latLng.lat,
        "longitude:" + location.latLng.lng,
        "speed:" + location.speed,
        "time:" + location.time,
        "bearing:" + location.bearing].join("\n");

      myLocation = { 'lat' : location.latLng.lat, 'lng' : location.latLng.lng };

      map.addMarker({
        'position': location.latLng,
        'title': msg
      }, function(marker) {
        marker.showInfoWindow();
        map.animateCamera({
          'target': location.latLng,
          // 'tilt': 60,
          'zoom': 18,
          'bearing': 140
        });
      });
    });
  }

  $scope.fullScreen = function() {
    map.showDialog();
  }

  $scope.setRoutes = function() {

			getDirections(map);


		function moveMarker(map, marker, latlng) {
			marker.setPosition(latlng);
			map.setCenter(latlng);
		}

		function autoRefresh(map, pathCoords) {

      map.addMarker({
        'position': new plugin.google.maps.LatLng(myLocation.lat, myLocation.lng),
        'icon': { 'url': 'http://www.kmcgraphics.com/google/caricon.png' }
      }, function(marker) {

        for (i = 0; i < pathCoords.length; i++) {
  				setTimeout(function(coords) {
            map.setCenter( new plugin.google.maps.LatLng(coords.lat(), coords.lng()));
            marker.setPosition( new plugin.google.maps.LatLng(coords.lat(), coords.lng()))
            console.log('Move location : ' + coords.lat() + ' - ' + coords.lng());
  				}, 800 * i, pathCoords[i]);
  			}
      });
		}

		function getDirections(map) {
			var directionsService = new google.maps.DirectionsService();

			var start = new google.maps.LatLng(myLocation.lat, myLocation.lng);

      // new_latitude  = myLocation.lat  + (1 / 6378) * (180 / Math.PI);
      // new_longitude = myLocation.lng + (1 / 6378) * (180 / Math.PI) / Math.cos(myLocation.lat * Math.PI/180);
			// var end = new google.maps.LatLng(new_latitude, new_longitude);

			var request = {
				origin:start,
				destination:'mairie de clichy france',
				travelMode: google.maps.TravelMode.WALKING
			};
			directionsService.route(request, function(result, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					autoRefresh(map, result.routes[0].overview_path);
				}
			});
		}

  }

}]);
