import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
                const agents = (json && json.data) || [];
                this.setState({ valorantCharacters: agents});
            });
    }

    render() {
      return (
        <main className='appMain'>
          <section className='charBackground'>
            <div className='organize'>
            {
              this.state.valorantCharacters && this.state.valorantCharacters.map((params, index) => {
                return (    
                  <ValorantCharacter 
                    name={params.displayName}
                    description={params.description}
                    developerName={params.developerName}
                    uuid={params.uuid}
                    icon={params.displayIconSmall}
                    key={index} /> 
                );
             })
            }
            </div>
          </section>
          <div className='goBack1'>
            <Link to="/" className='backlink'>Back </Link>
          </div>
        </main>
        
      );
    }
}

export default ApiConnect;