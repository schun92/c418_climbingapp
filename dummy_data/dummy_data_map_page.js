//Input from frontend: Latitude and longitude range
//From frontend
var dataCall = {
    traditional: true, //true or false
    topeRope: true, //true or false
    sport: true, //true or false
    boulder: true, //true or false 
    rockDiffStart: '3', //3 to 5.15d
    rockDiffEnd: '5.11c', //3 to 5.15d
    boulderDiffStart: 'V0', //V0 to V14
    boulderDiffEnd: 'V14', //V0 to V14
}

//From backend:
var mapDummyData = [
    {
        "ID": "1",
        "name": "(a) Slab City",
        "avgLat": "34.0187",
        "avgLong": "-117.416",
        "numRoutes": "14"
    },
    {
        "ID": "2",
        "name": "(b) Metro Sector",
        "avgLat": "34.0169",
        "avgLong": "-117.417",
        "numRoutes": "4"
    },
    {
        "ID": "3",
        "name": "(c) Left of the Roof",
        "avgLat": "34.0169",
        "avgLong": "-117.417",
        "numRoutes": "13"
    }
]