import React from 'react';

import CardTemplate from 'CardTemplate';
import CardActions from 'CardActions';
import DeckCreateContent from './DeckCreateContent';

export default class DeckCreate extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
    }

    handleSave() {

    }

    render() {
        var body = <DeckCreateContent/>;
        var actionsList = [
            <li key="deck-save">
                <a className="card-action-grey"
                   onClick={this.handleSave}>Save</a>
            </li>
        ];
        var actions = <CardActions actions={actionsList}/>;
        return (
            <CardTemplate title="Create"
                          body={body} actions={actions}/>


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