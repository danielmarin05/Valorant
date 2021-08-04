import React, {Component} from 'react';

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
          <section>
          {console.log('This STATE',this.state.charactersInfo)}
            {
              //this.state.charactersInfo && this.state.charactersInfo.map((params, index) => {
               // return (    
                    <span>{this.state.charactersInfo.displayName}</span>,
                    <span>
                        {this.state.abilities.map((params, index)=> <span key={index}>{params.displayName}</span>)} 
                    </span> 
                //);
             //})
            }
          </section>
        </div>
            
        );
    }
}

export default CharacterSpecs;