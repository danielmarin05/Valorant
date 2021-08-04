import React, {Component} from "react";
import './ValorantCharacter.css';
import {Link} from 'react-router-dom';



class ValorantCharacter extends Component{
    
    render(){
        //const { uuid } = props.match.params;
        const nameArray = this.props && this.props.name;
        console.log('Test:  ', nameArray);
        return(
            <div>
                <ul>
                    <li><Link to= {`/charactersinfo/${this.props.uuid}`}> {this.props.name} </Link></li>
                </ul> 
            </div>
            
        );
    }
}

export default ValorantCharacter;