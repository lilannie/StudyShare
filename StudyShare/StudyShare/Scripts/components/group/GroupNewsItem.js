import React from 'react';

import AvatarHeader from './AvatarHeader';
import NewsImage from './NewsImage';
import NewsLikeDisplay from './NewsLikeDisplay';
import NewsComments from './NewsComments';
import NewsCommentBox from './NewsCommentBox';

import {
    Row,
    Col,
    Icon,
    Grid,
    Panel,
    Image,
    Button,
    PanelBody,
    PanelHeader,
    PanelFooter,
    FormControl,
    PanelContainer,
} from '@sketchpixy/rubix';

import '../../scss/group.scss';

export default class GroupNewsFeed extends React.Component {
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
        var panelStyle = {
            "backgroundColor": "white"
        };

        var panelBodyStyle = {
            padding: 10,
            paddingTop: 2,
            color: "#1b6d85"
        };

        return (
            <div className="panel" style={panelStyle}>
                <PanelBody style={panelBodyStyle}>
                    <div className="ribbon-left">
                        Share
                    </div>
                    <AvatarHeader/>
                    <div className='panel-body'>
                            {"I'll be out of my mind and you'll be out of ideas pretty soon. So let's spend the afternoon in a cold hot air balloon. Leave your jacket behind. Lean out and touch the tree tops over town. I can't wait to kiss the ground wherever we touch back down."}
                    </div>
                    <NewsImage />
                </PanelBody>

                <NewsLikeDisplay />
                <NewsComments />
                <NewsCommentBox />
            </div>
        );
    }
}