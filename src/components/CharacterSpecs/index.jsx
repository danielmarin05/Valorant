import React, {Component} from 'react';

const valorantUrl = 'https://valorant-api.com/v1/agents/';
 
class CharacterSpecs extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            charactersInfo: [],
            uuid: props.match.params
        }
    }
    
    componentDidMount() {
        //const { uuid } = this.props.match.params;
        const endpoint = `${valorantUrl}${this.state.uuid}`;
        console.log('ENDPOINT', endpoint)
        fetch(`${valorantUrl}${this.state.uuid}`)
            .then(response => response.json())
            .then(json => {
                const agent = (json && json.data) || [];
                this.setState({ charactersInfo: agent});
                console.log('TEST', this.state.uuid)
            });
    }

    render(){
        return(
        <div>
          <section>
          {console.log('This STATE',this.state.charactersInfo)}
            {
              this.state.charactersInfo && this.state.charactersInfo.map((params, index) => {
                return (    
                    <span>name:{params.name}</span>
                );
             })
            }
          </section>
        </div>
            
        );
    }
}

export default CharacterSpecs;