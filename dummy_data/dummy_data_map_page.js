//Input from frontend: Latitude and longitude range
//From frontend
var dataCall = {
    latitudeRange: [33.6251, 33.6467],
    longitudeRange: [-117.7958, -117.4273],
}

//From backend:
var mapDummyData = [
    {
        'mountainLocation': 'Ortega Falls',
        'latitude': 33.6251, //avg latitude of routes,
        'longitude': -117.4273,//avg longitude of routes,
        'numberOfRoutes': 4,
    },
    {
        'mountainLocation': 'El Cariso',
        'latitude': 33.6438,
        'longitude': -117.4432,
        'numberOfRoutes': 2,
    }, 
    {
        'mountainLocation': 'Upper San Juan Boulders',
        'latitude': 33.6072,
        'longitude': -117.4336,
        'numberOfRoutes': 7,
    } 
]