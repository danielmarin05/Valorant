import React, {Component} from "react";
import './ValorantCharacter.css';
import {Link} from 'react-router-dom';

class ValorantCharacter extends Component{
    
    render(){
        const nameArray = this.props && this.props.name;
        return(
            <section className='charsection'>
                <caption className='varlorantcharCaption'>
                    <img src={this.props.icon} alt={`champion ${this.props.name}`}/>
                </caption>
                <Link to= {`/charactersinfo/${this.props.uuid}`}  className='linkColor'> {this.props.name} </Link>
            </section>
            
        );
    }
}

export default ValorantCharacter;
