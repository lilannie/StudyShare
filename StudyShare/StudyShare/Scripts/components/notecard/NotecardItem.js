import React from 'react';

import NotecardFront from './NotecardFront';
import NotecardBack from './NotecardBack';

import '../../scss/notecard.scss';

export default class NotecardItem extends React.Component {
    static defaultProps = {
        id: 0
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={"notecard-"+this.props.cardId} className="notecard">
                <div className="info-card">
                    <NotecardFront cardId={this.props.cardId} content={this.props.front}/>
                    <NotecardBack cardId={this.props.cardId} content={this.props.back} />
                </div>
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
