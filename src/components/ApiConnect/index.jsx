import React, { Component } from 'react';
import CharacterSpecs from '../CharacterSpecs';
import ValorantCharacter from '../ValorantCharacter';
import './ApiConnect.css';

const valorantUrl = 'https://valorant-api.com/v1/agents';

class ApiConnect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorantCharacters: []
        }
    }

    componentDidMount() {
        fetch(valorantUrl)
            .then(response => response.json())
            .then(json => {
                console.log('@Json',  json)
                const agents = json && json.data || [];
                console.log('@Variable Results', agents);
                this.setState({ valorantCharacters: agents});
            });
    }

    render() {
      return (
        <div>
          <section>
          {console.log('This STATE',this.state.valorantCharacters)}
            {
              
              this.state.valorantCharacters && this.state.valorantCharacters.map((params, index) => {
                return (    
                  <ValorantCharacter 
                    name={params.displayName}
                    description={params.description}
                    developerName={params.developerName}
                    uuid={params.uuid}
                    key={index} /> 
                );
             })
            }
          </section>
        </div>
      );
    }
}

export default ApiConnect;