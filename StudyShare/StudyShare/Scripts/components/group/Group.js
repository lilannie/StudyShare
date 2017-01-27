import React from 'react';

import ContentHeader from 'ContentHeader';
import GroupNav from './GroupNav'

import '../../scss/group.scss';

export default class Group extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="group">
                <ContentHeader title="Groups"/>
                <GroupNav />
            </div>
        );
    }
}