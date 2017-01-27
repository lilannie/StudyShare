import React from 'react';

import '../../scss/group.scss';

export default class GroupNavTab extends React.Component {
    static defaultProps = {
        active: false,
        tabId: "#tab-0",
        content: (<h1>FAKE CONTENT</h1>)
    };

    state = {
        foo: 'bar'
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        if (this.props.active) {
            return (
                <li className="active">
                    <a href={this.props.tabId}
                       data-toggle="tab">
                        <h3>{this.props.title}</h3>
                    </a>
                </li>
            );
        }
        return (
            <li>
                <a href={this.props.tabId}
                   data-toggle="tab">
                    <h3>{this.props.title}</h3>
                </a>
            </li>
        );
    }
}