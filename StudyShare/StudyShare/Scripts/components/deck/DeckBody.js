import React from 'react';

import DeckItem from './DeckItem';

export default class DeckBody extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);

        this.getDeckItems = this.getDeckItems.bind(this);
    }

    getDeckItems() {
        return this.props.decks.map(function(deck) {
            return <DeckItem key={"deck-"+deck.id}
                deckId={deck.id} title={deck.title}
                             description={deck.description}/>

        });
    }

    render() {
        return (
            <div className=""
                 style={{"margin": "10px"}}>
                {this.getDeckItems()}
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

}