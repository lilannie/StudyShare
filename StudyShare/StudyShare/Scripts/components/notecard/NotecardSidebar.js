import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';


export default class NotecardSidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notecard-sidebar container-fluid">


                    <h3>Title</h3>
                <br/>
                    <input type="text" name="title"
                           className="form-control"
                           placeholder="Title"/>
                <br/>
                    <h3>Description</h3>
                <br/>
                    <textarea name="description"
                          className="form-control"
                          placeholder="description"/>
                <br/>
                <Link to={'/notecards'}>
                    <button id="save-deck"
                            className="btn">Save
                    </button>
                </Link>
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