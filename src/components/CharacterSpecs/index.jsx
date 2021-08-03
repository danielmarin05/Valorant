import React, {Component} from 'react';


class CharacterSpecs extends Component{
    render(){
            return(
                <span>UUID:{this.props.uuid}</span>,
                <span>description: {this.props.description}</span>
            );
    }
}

export default CharacterSpecs;