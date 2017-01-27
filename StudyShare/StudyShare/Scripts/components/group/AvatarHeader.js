import React from 'react';

import GroupStatusBox from './GroupStatusBox';

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

export default class AvatarHeader extends React.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        var imageStyle = {
            margin: "0px 0px 0px 15px"
        };

        var avatarStyle = {
            marginRight: 20
        };

        return (
            <Row>
                <div className='avatar' style={avatarStyle}>

                    <h3 className="name text-right">
                        Toby King
                        <img src='/images/avatars/guy.png'
                             width='50' height='50'
                             style={imageStyle}/>
                    </h3>
                    <h4 className='company text-right'>Iowa State University</h4>

                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                        <div style={{position: 'relative', top: -10}}>
                            <small><strong>2 hours ago</strong></small>
                        </div>
                    </div>
                </div>
            </Row>
        );
    }
}