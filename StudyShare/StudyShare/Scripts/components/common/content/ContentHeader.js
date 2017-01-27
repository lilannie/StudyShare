import React from 'react';

import {Row, Col} from 'react-bootstrap';

export default class ContentHeader extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        var noPadding = {"padding": "0px"};
        return (
            <Row>
            <Col md={4} mdPull={3} style={noPadding}>
                <div className="container-fluid" style={noPadding}>
                    <h1 className="content-header text-right"
                        style={{"paddingRight": "20px"}}>
                        {this.props.title}
                    </h1>
                </div>
            </Col>
            </Row>
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