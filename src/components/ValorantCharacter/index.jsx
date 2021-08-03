import React, {Component} from "react";
import './ValorantCharacter.css';
import {Link} from 'react-router-dom';



class ValorantCharacter extends Component{

    render(){
        const nameArray = this.props && this.props.name;
        console.log('Test:  ', nameArray);
        return(
            <div>
                <Link to='/charactersinfo'>{nameArray}</Link>
            </div>
            
        );
    }
}

export default ValorantCharacter;