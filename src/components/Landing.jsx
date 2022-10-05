import React from 'react';
import { Link } from 'react-router-dom';
import UndrawMovie from "../assets/undraw_home_cinema_l7yl.svg";

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>American-based provider for home movie enthusiasts</h1>
                        <h2>Find your dream movie with <span className='purple'>Blockbuster</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Movies</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawMovie} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
