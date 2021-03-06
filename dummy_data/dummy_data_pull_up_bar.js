//These are the routes at the mountain_location that fit the current filter. 
//Input from frontend: mountain_location and filters

//Request from front end
var data_call = {
    locationId: 93874925,
}

//Response from back end
var pull_up_bar = {
    'mountainLocation': 'Ortega Falls',
    'routes': [
        {   
            id: 123456,
            routeName: 'Dihedral',
            difficulty: 5.7,
            popularity: 3.1,
            routeID: 29,
        },
        {   
            id: 2465742,
            routeName: 'Fingers',
            difficulty: 5.9,
            popularity: 3.4,
            routeID: 234
        },
        {   
            id: 1234324315,
            routeName: 'Splitter',
            difficulty: '5.10d',
            popularity: 3.5,
            routeID: 356
        }
    ]
}
