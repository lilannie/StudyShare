import React from 'react';
import {Row, Col} from 'react-bootstrap';

import NotecardContent from './NotecardContent';
import NotecardSidebar from './NotecardSidebar';
import ContentHeader from 'ContentHeader';

export default class Notecard extends React.Component {
    static defaultProps = {
        foo: "bar"
    };

    state = {
        foo: "bar"

    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="notecard-container">
                <ContentHeader title="Edit Deck"/>
                <Row>
                    <Col md={1} style={{"padding": "0px"}}>
                        <NotecardSidebar/>
                    </Col>
                    <Col md={9} style={{"padding": "0px"}}>

                        <NotecardContent />
                    </Col>
                </Row>
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
