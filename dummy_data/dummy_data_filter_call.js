//Dummy data for filter
var request = {
    traditional: true, //true or false
    topeRope: true, //true or false
    sport: true, //true or false
    boulder: true, //true or false 
    rockDiffStart: '3', //3 to 5.15d
    rockDiffEnd: '5.11c', //3 to 5.15d
    boulderDiffStart: 'V0', //V0 to V14
    boulderDiffEnd: 'V14', //V0 to V14
}

var resposne = {
    "success": true,
    "errors": [],
    "data": {
        "locations": [
            {
                "ID": "1",
                "name": "(a) Slab City",
                "avgLat": "34.0187",
                "avgLong": "-117.416",
                "numFilterRoutes": "14",
                "filterRouteIDs": [106033708, 105906823, 106067249, 105911055,  106067249, 105911055],
            },
            {
                "ID": "2",
                "name": "(b) Metro Sector",
                "avgLat": "34.0169",
                "avgLong": "-117.417",
                "numFilterRoutes": "4",
                "filterRouteIDs": [106033708, 105906823, 106067249, 105911055,  106067249, 105911055],
            }
        ]
    }
}