import React, { Component } from 'react';
import './team.css';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';
import blank from '../../assets/images/blank.png';
import jphoto from '../../assets/images/jphoto.jpg';

export default class Team extends Component {

    render() {
        return (
            <div>
                <h1>Meet the Team</h1>
                <div className="team">
                    <div className="member">
                        <img src={blank} alt="" />
                        <h2>Dan</h2>
                        <h3>Frontend</h3>
                        <p>
                            <img src={github} alt="" />
                            <img src={linkedin} alt="" />
                        </p>
                    </div>
                    <div className="member">
                        <img src={blank} alt="" />
                        <h2>Paul</h2>
                        <h3>Backend</h3>
                        <p>
                            <img src={github} alt="" />
                            <img src={linkedin} alt="" />
                        </p>
                    </div>
                    <div className="member">
                        <img src={blank} alt="" />
                        <h2>Aaron</h2>
                        <h3>Backend</h3>
                        <p>
                            <img src={github} alt="" />
                            <img src={linkedin} alt="" />
                        </p>
                    </div>
                    <div className="member">
                        <img src={blank} alt="" />
                        <h2>Sarah</h2>
                        <h3>Frontend</h3>
                        <p>
                            <img src={github} alt="" />
                            <img src={linkedin} alt="" />
                        </p>
                    </div>
                    <div className="member">
                        <img src={blank} alt="" />
                        <h2>Amin</h2>
                        <h3>Backend</h3>
                        <p>
                            <img src={github} alt="" />
                            <img src={linkedin} alt="" />
                        </p>
                    </div>
                    <div className="member">
                        <img src={jphoto} alt="" />
                        <h2>Jhon</h2>
                        <h3>Frontend</h3>
                        <p>
                            <img src={github} alt="" />
                            <img src={linkedin} alt="" />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}