import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
        <main className='divcharSpecs'>
            {console.log('This STATE',this.state.charactersInfo)}
            <section className='nameTitle'>
                <h1>{this.state.charactersInfo.displayName}</h1>
            </section>
            <caption className='caption'>
                <img className='charImage' src={this.state.charactersInfo.fullPortrait} alt='character image'/>
            </caption>
            <section className='descriptionContainer'>
                <h2 className='descriptionTitle'>description</h2>
                <p className='paragraph'>{this.state.charactersInfo.description}</p>
            </section>
            <article className='article' >
                <h2 className='descriptionTitle'>abilities</h2>
                <ul className='descriptionList'>
                    { 
                        this.state.abilities.map((params, index)=> <li className='charListed' key={index}>{params.displayName}</li>)
                    }
                </ul>  
            </article>
          <div className='goBack' alt='back link'><Link to="/characters" className='linkColor'>Back </Link></div>
        </main>
            
        );
    }
}

export default CharacterSpecs;