import React from 'react';

import NotecardItem from './NotecardItem';
import NotecardToolbar from './NotecardToolbar';
import NotecardCarousel from './NotecardCarousel';
import NotecardDelete from './NotecardDelete';
import NotecardEdit from './NotecardEdit';

export default class NotecardContent extends React.Component {
    static defaultProps = {
        foo: "bar"
    };

    state = {
        decks: [
            {
                id: 0,
                title: "Derivatives",
                description: "Calculus Derivatives",
                notecards: [
                    {
                        id: 0,
                        front: "First Derivative",
                        back: "Change in X"
                    },
                    {
                        id: 1,
                        front: "Second Derivative",
                        back: "Change in X^2"
                    },
                    {
                        id: 2,
                        front: "Acceleration",
                        back: "Second Derivative"
                    },
                ]
            },
            {
                id: 1,
                title: "Integrals",
                description: "Calculus Integrals",
                notecards: [
                    {
                        id: 0,
                        front: "card 0 front",
                        back: "card 0 back"
                    },
                    {
                        id: 1,
                        front: "card 1 front",
                        back: "card 1 back"
                    },
                    {
                        id: 2,
                        front: "card 2 front",
                        back: "card 2 back"
                    },
                ]
            }
        ],

    };

    constructor(props) {
        super(props);

        this.getNotecardItems = this.getNotecardItems.bind(this);
    }

    getNotecardItems() {
        var deckId;
        // var deckId = this.props.location.query;
        if (deckId === undefined) {
            deckId = 0;
        }
        // this.state.decks[deckId].notecards.sort(function (x, y) {
        //     return x.order - y.order;
        // });

        return this.state.decks[deckId].notecards.map(function (notecard) {
            return <NotecardItem cardId={notecard.id}
                                 key={"notecard-"+notecard.id}
                                 front={notecard.front}
                                 back={notecard.back}/>;

        });
    }

    render() {
        return (

                <div className="notecard-deck">
                    <NotecardToolbar />
                    {this.getNotecardItems()}
                    <NotecardCarousel />
                    <NotecardDelete />
                    <NotecardEdit />
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
