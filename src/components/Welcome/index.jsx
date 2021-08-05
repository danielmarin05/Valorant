import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Welcome.css'

class Welcome extends Component{
    render(){
        return(
            <main className='main'>
                <header className='header'>
                    <h1 className='vTitle' alt='Valorant title'>Valorant</h1>
                </header>
                <section>
                    <ul>
                        <li className='charList'>
                            <Link to='characters' className='linkColor'>Characters </Link>
                        </li>

                    </ul>
                </section>
            </main>
        );
    }
}

export default Welcome;