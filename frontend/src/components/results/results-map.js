import React, { Component }from 'react';
import RouteModal from './route-modal';
import map from '../../assets/images/map.png'
import './results-map.css';



class RouteMap extends Component {
    constructor(props){
        super(props)
        console.log('props:', props)
    
    }

    render(){
        return(
            <div>
                <img className="map-img" src={map} />
            </div>
        )
    }
}

export default RouteMap;


    // document.querySelector('.map-content').addEventListener('click', function () {
    //     document.querySelector('.routes-modal').classList.toggle('show');
    // })
    // document.querySelector('#modalButton').addEventListener('click', showModal)
    // document.querySelector('#modalShadow').addEventListener('click', noneModal)
    // document.querySelector('#modalBody').addEventListener('click', e => e.stopPropagation())

    // function showModal(e) {

    //     document.querySelector('#modalShadow').style.display = "block"
    // }

    // function noneModal() {
    //     document.querySelector('#modalShadow').style.display = "none"
    // }