import React from 'react';
import $ from 'jquery';
import {Row, Col} from 'react-bootstrap';

import Header from 'Header';
import Footer from 'Footer';
import Sidebar from 'Sidebar';
import '../scss/app.scss';

export default class Main extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <Row>
                <Sidebar/>
                <Col id="main-content-wrapper"
                     style={{"padding":"0px"}}
                     role="main">
                    {this.props.children}
                </Col>
                </Row>
            </div>
        );
    }

    componentWillMount() {}

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

}