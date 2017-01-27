import React from 'react';

import NewsCommentItem from './NewsCommentItem';

import {
    PanelFooter
} from '@sketchpixy/rubix';

export default class NewsComments extends React.Component {
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
        var containerStyle = {
            padding: 25,
            paddingTop: 0,
            paddingBottom: 0
        };

        return (
            <PanelFooter
                className="comment-container"
                style={containerStyle}>
                <NewsCommentItem />
                <NewsCommentItem />
            </PanelFooter>
        );
    }
}