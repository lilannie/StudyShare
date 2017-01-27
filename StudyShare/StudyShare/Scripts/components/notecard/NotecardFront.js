import React from 'react';
import $ from 'jquery';
import NotecardSelector from './NotecardSelector';

import '../../scss/notecard.scss';

export default class NotecardFront extends React.Component {
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
            <div id={"notecard-front-"+this.props.cardId}
                 className="front panel panel-default">
                <NotecardSelector cardId={this.props.cardId}/>

                <div className="panel-body">

                    {this.props.content}
                </div>

                <div className="panel-footer">
                    <button className="btn"
                            onClick={rotateCard.bind(null, this.props.cardId, true)}>
                        Back
                    </button>
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