//Input from frontend: Latitude and longitude range
//From frontend
var dataCall = {
    latitudeStart: 33.6251,
    latitudeEnd: 33.6467,
    longitudeStart: -117.7958,
    longitudeEnd: -117.4273,
    rock: true, //true or false
    traditional: true, //true or false
    topeRope: true, //true or false
    sport: true, //true or false
    rockDiffStart: '3', //3 to 5.15d
    rockDiffEnd: '5.11c', //3 to 5.15d
    boulderDiffStart: 'V0', //V0 to V14
    boulderDiffEnd: 'V14', //V0 to V14
}

//From backend:
var mapDummyData = [
    {
        'mountainLocation': 'Ortega Falls',
        'latitude': 33.6251, //avg latitude of routes,
        'longitude': -117.4273,//avg longitude of routes,
        'numberOfRoutes': 4, //Number of routes that fit filter
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