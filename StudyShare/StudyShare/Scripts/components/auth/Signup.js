import React from 'react';
import {Link} from 'react-router';

import Cover from 'Cover';

import '../../scss/signup.scss';

export default class Signup extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="signup">
                <Cover />
                <div className="signup-body container-fluid">

                    {/** Your JSX code goes here **/}

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

    static shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

};

