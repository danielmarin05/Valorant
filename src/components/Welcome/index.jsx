import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Welcome extends Component{
    render(){
        return(
            <main>
                <header>
                    <h1>Valorant</h1>
                </header>
                <section>
                    <ul>
                        <li>
                            <Link to='characters'>Characters</Link>
                        </li>

                    </ul>
                </section>
            </main>
        );
    }
}

export default Welcome;