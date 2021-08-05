import React, {Component} from 'react';
import './CharacterSpecs.css';
const valorantUrl = 'https://valorant-api.com/v1/agents/';
 
class CharacterSpecs extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            charactersInfo: {},
            abilities: [],
            uuid: props.match.params.uuid
        }
    }
    
    componentDidMount() {
        //const { uuid } = this.props.match.params;
        const endpoint = `${valorantUrl}${this.state.uuid}`;
        console.log('ENDPOINT', endpoint)
        fetch(`${valorantUrl}${this.state.uuid}`)
            .then(response => response.json())
            .then(json => {
                const agent = (json && json.data) || {};
                this.setState({ charactersInfo: agent});
                this.setState({ abilities: agent.abilities});
                console.log('TEST', this.state.uuid)
            });
    }

    render(){
        return(
        <div>
          <section className='sectioncharSpecs'>
            {console.log('This STATE',this.state.charactersInfo)}
            <span className='nameTitle'>{this.state.charactersInfo.displayName}</span>
            <img src={this.state.charactersInfo.fullPortrait} alt='Character image'/>
                { 
                    <ul>
                        <li>{this.state.abilities.map((params, index)=> <span key={index}>{params.displayName}</span>)} </li> 
                    </ul> 
                }
          </section>
        </div>
            
        );
    }
}

export default CharacterSpecs;