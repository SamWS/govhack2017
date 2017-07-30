var filteredLocs = []

var map;
function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var canberra = {lat: -35.2809, lng: 149.1300};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
],
        center: canberra
    });

// directionsDisplay.setMap(map);

// calculateAndDisplayRoute(directionsService, directionsDisplay);

          // Define the LatLng coordinates for the polygon's path.
        var macquarie = [
          {lat: -35.243646, lng: 149.056215},
          {lat: -35.247391, lng: 149.056156},
          {lat: -35.254801, lng: 149.054063},
          {lat: -35.257224, lng: 149.054407},
          {lat: -35.255253, lng: 149.060855},
          {lat: -35.255253, lng: 149.061860},
          {lat: -35.256107, lng: 149.066084},
          {lat: -35.255564, lng: 149.069631},
          {lat: -35.255573, lng: 149.069360},
          {lat: -35.253411, lng: 149.072922},
          {lat: -35.253514, lng: 149.074530},
          {lat: -35.250322, lng: 149.075759},
          {lat: -35.246486, lng: 149.063748},
          {lat: -35.243646, lng: 149.056215}
        ];

        var duffy = [
          {lat: -35.325319, lng: 149.026013},
          {lat: -35.337209, lng: 149.022382},
          {lat: -35.344438, lng: 149.024731},
          {lat: -35.344003, lng: 149.027187},
          {lat: -35.343785, lng: 149.031351},
          {lat: -35.342392, lng: 149.034608},
          {lat: -35.342348, lng: 149.041121},
          {lat: -35.341477, lng: 149.040854},
          {lat: -35.336686, lng: 149.037331},
          {lat: -35.334857, lng: 149.037704},
          {lat: -35.332810, lng: 149.039947},
          {lat: -35.330197, lng: 149.041281},
          {lat: -35.329718, lng: 149.043630},
          {lat: -35.325188, lng: 149.043951},
          {lat: -35.326930, lng: 149.040801},
          {lat: -35.326451, lng: 149.031885},
          {lat: -35.325319, lng: 149.026013}
        ];

        var forrest = [
          {lat: -35.319527, lng: 149.114355},
          {lat: -35.323168, lng: 149.119634},
          {lat: -35.322188, lng: 149.123024},
          {lat: -35.322783, lng: 149.124312},
          {lat: -35.322643, lng: 149.126586},
          {lat: -35.321873, lng: 149.127917},
          {lat: -35.320752, lng: 149.128689},
          {lat: -35.319176, lng: 149.133024},
          {lat: -35.317286, lng: 149.132895},
          {lat: -35.316515, lng: 149.134182},
          {lat: -35.316095, lng: 149.135341},
          {lat: -35.314834, lng: 149.133367},
          {lat: -35.313434, lng: 149.133238},
          {lat: -35.310772, lng: 149.128646},
          {lat: -35.311823, lng: 149.126887},
          {lat: -35.312383, lng: 149.124483},
          {lat: -35.319527, lng: 149.114355}
        ];

 

        // Construct the polygon.
        var canberraPoly = new google.maps.Polygon({
          paths: [macquarie, duffy, forrest],
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        canberraPoly.setMap(map);


  google.maps.event.addListener(canberraPoly, 'click', function (event) {
      directionsDisplay.setMap(map);
      calculateAndDisplayRoute(directionsService, directionsDisplay);
      canberraPoly.setMap(null)
  });  
///// marker adding
  // var marker, i;
  // var markers = [];

  // function makeMarkers() {
  //   for (i = 0; i < filteredLocs.length; i++) {  
  //     marker = new google.maps.Marker({
  //         position: new google.maps.LatLng(filteredLocs[i]["LATITUDE"], filteredLocs[i]["LONGITUDE"]),
  //         map: map
  //     });

  //     var contentString = "<div>" + filteredLocs[i]["Speed"] + "</div>"

  //     var infowindow = new google.maps.InfoWindow();

  //     google.maps.event.addListener(marker, "click", (function(marker,content,infowindow){ 
  //       return function() {
  //         infowindow.setContent(content);
  //         infowindow.open(map,marker);
  //       };
  //     })(marker,contentString,infowindow)); 

  //   }
  //   markers.push(marker)
  // }

//// remove markers
  // function removeMarkers() {
  //     for (i = 0; i < markers.length; i++) {
  //       markers[i].setMap(null);
  //     }
  //   }

  //////heatmap stuff

    // var heatmapData = [];
    // for (var i = 0; i < filteredLocs.length; i++) {
    //     var latLng = new google.maps.LatLng(filteredLocs[i]["LATITUDE"], filteredLocs[i]["LONGITUDE"]);
    //     heatmapData.push(latLng)    
    // }
    // var heatmap = new google.maps.visualization.HeatmapLayer({
    //     data: heatmapData,
    //     dissipating: true,
    //     map: map
    // });

  // google.maps.event.addListener(map, 'zoom_changed', function() {
  //   var zoom = map.getZoom();
  //   if (zoom > 13) {
  //     makeMarkers();
  //     heatmap.setMap(null);
  //   } else {
  //     // hide the markers, show the heatmap
  //     heatmap.setMap(map);
  //     removeMarkers();
  //   }
  // })
}



function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var waypoints = [];
    waypoints.push({location: new google.maps.LatLng(-35.256011, 149.058001)})
    waypoints.push({location: new google.maps.LatLng(-35.252013, 149.069788)})
    waypoints.push({location: new google.maps.LatLng(-35.252264, 149.07259)})

        directionsService.route({
          origin: new google.maps.LatLng(-35.251218, 149.0601051),
          destination: new google.maps.LatLng(-35.251218, 149.0601051),
          travelMode: 'DRIVING',
          waypoints: waypoints,
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }


$.get('../data/data.json')
  .done(data => {
      filteredLocs = data.filter((loc) => {
          return loc["DENSITY.HOUR"] < 100;
      }).filter((loc) => {
          return loc["Speed"] <= 50;
      });
  })
  .always(initMap);