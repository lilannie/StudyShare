import React from 'react';

import {Row, Col} from 'react-bootstrap';

export default class BrowseRowHeader extends React.Component {
    static defaultProps = {
        title: 'DEFAULT TITLE'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="browse-header">
                <h2>{this.props.title}</h2>
                <Row>
                <Col md={10}>
                    <hr/>
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