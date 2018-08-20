import React from 'react';

import Search from './search';
import CharacterList from './character-list';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }

        this.newSearchTerm = this.newSearchTerm.bind(this);
    }

    newSearchTerm(searchTerm) {
        this.setState({
            searchTerm
        })
    }

    render() {
      console.log(this.props);
        const characters = this.props.characters.filter(character =>
            character.name.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )

        );
        return (
            <div className="live-search">
                {/*<Search onChange={searchTerm => this.setState({searchTerm})} />*/}
                <Search onChange = {this.newSearchTerm} />
                <CharacterList characters={characters} />
            </div>
        );
    }
}