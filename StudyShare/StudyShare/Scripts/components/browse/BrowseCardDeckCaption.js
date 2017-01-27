import React from 'react';

export default class BrowseCardDeckCaption extends React.Component {
    static defaultProps = {
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="deck-caption">
                {this.props.numCards} Cards
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