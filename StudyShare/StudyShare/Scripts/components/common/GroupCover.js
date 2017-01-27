import React from 'react';

import '../../scss/group.scss';

export default class GroupCover extends React.Component {
    static defaultProps = {
        title: 'Fake Title',
        background: '#333333'
    };

    state = {
        foo: 'bar'
    };

    render() {
        var coverStyle = {
            backgroundImage: "url('"+this.props.background+"')"
        };
        return (
            <div className="group-cover-container">
                <div className='group-cover' style={coverStyle}>
                    <h1 className="cover-title">
                        {this.props.title}
                        </h1>
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