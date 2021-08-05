import React, {Component} from "react";
import './ValorantCharacter.css';
import {Link} from 'react-router-dom';



class ValorantCharacter extends Component{
    
    render(){
        //const { uuid } = props.match.params;
        const nameArray = this.props && this.props.name;
        console.log('Test:  ', nameArray);
        return(
            <section className='charsection'>
                <ul>
                    <li className='charList'><Link to= {`/charactersinfo/${this.props.uuid}`} className='linkColor'> {this.props.name} </Link></li>
                </ul>
            </section>
        );
    }
}

export default ValorantCharacter;