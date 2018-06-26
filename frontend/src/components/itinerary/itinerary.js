import React, { Component } from 'react';
import './itinerary.css'

export default class Itinerary extends Component {
    render() {
        return (
            <div className="centered">
                <div className='itinerary-title'>
                    <h1>Itinerary</h1>
                </div>
                <section className="cards">


                    <article className="card">

                        <a href="route-details-page.html">
                            <h3>Ortega Falls</h3>
                            <p>Fingers</p>
                        </a>
                    </article>


                    <article className="card">
                        <h3>Ortega Falls</h3>
                        <p>Polish</p>
                    </article>


                    <article className="card">
                        <h3>San Jaun Loop</h3>
                        <p>Alpine</p>
                    </article>


                    <article className="card">
                        <h3>San Jaun Loop</h3>
                        <p>Jagged Ridge</p>
                    </article>
                    <article className="card">
                        <h3>Ortega Falls</h3>
                        <p>Fingers</p>
                    </article>


                    <article className="card">
                        <h3>Ortega Falls</h3>
                        <p>Polish</p>
                    </article>


                    <article className="card">
                        <h3>San Jaun Loop</h3>
                        <p>Alpine</p>
                    </article>


                </section>
                <input type="email" placeholder="email address" />
                <button>Send My intinerary</button>

            </div>
        )
    }
} 