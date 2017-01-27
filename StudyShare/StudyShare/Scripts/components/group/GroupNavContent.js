import React from 'react';

import '../../scss/group.scss';

export default class GroupNavContent extends React.Component {
    static defaultProps = {
        active: false,
        tabId: 'tab-0',
        title: 'FAKE TAB'
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
                <div className="tab-pane active" id={this.props.tabId}>
                    {this.props.content}
                </div>
            );
        }
        return (
            <div className="tab-pane" id={this.props.tabId}>
                {this.props.content}
            </div>
        );
    }

}