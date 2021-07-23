const geojson = {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [10.752200, 59.913900]
                    },
                    properties: {
                        title: 'Mapbox',
                        description: 'Oslo, Norway'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [18.6435, 60.1282]
                    },
                    properties: {
                        title: 'Mapbox',
                        description: 'Stockholm, Sweden'
                    }
                },
                {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [12.5683, 55.6761]
                        },
                        properties: {
                            title: 'Mapbox',
                            description: 'Stockholm, Sweden'
                        }
                    },
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [16.489665, 64.922387]
                        },
                        properties: {
                            title: 'Mapbox',
                            description: 'Reykjavík, Iceland'
                        }
                    },
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [24.9384, 60.1699]
                        },
                        properties: {
                            title: 'Mapbox',
                            description: 'Helsinki, Finland'
                        }
                    },
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [6.5665, 53.2194]
                        },
                        properties: {
                            title: 'Mapbox',
                            description: 'Groningen, Netherlands'
                        }
                    }
            ]
                
            };
            
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyaWtkYWxsYXJpIiwiYSI6ImNrcmdqNnJycTBhM3gyb3BneGJzb2d3dzcifQ.VQnnPAa22xhzCdMwEZh7Qw';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [10, 60.8],
            zoom: 3
        });
       
            geojson.features.forEach(function (marker) {

                   
                    const el = document.createElement('div');
                    el.className = 'marker';

                    
                    new mapboxgl.Marker(el)
                        .setLngLat(marker.geometry.coordinates)
                        .setPopup(new mapboxgl.Popup({ offset: 25 }) 
                        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
                        .addTo(map);
                });