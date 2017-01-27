import React from 'react';

import {
    Row,
    Col,
    Icon,
    Grid,
    Button,
    PanelBody,
    PanelFooter,
    FormControl,
} from '@sketchpixy/rubix';

export default class GroupStatusBox extends React.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        var panelStyle = {
            backgroundColor: "white"
        };

        var panelBodyStyle = {
            padding: "5px 10px 0px 10px",
            paddingTop: 12.5,
            color: "#1b6d85"
        };

        var iconStyle = {
            marginRight: 25,
            color: "#1b6d85"
        };

        var formStyle = {
            border: 'none',
            maxWidth: "650px",
            padding: 10,
            backgroundColor: "rgba(233, 237, 239, 0.8)"
        };

        var footerStyle = {
            padding: '10px 5px'
        };

        return (
            <div className="panel" style={panelStyle}>
                <PanelBody style={panelBodyStyle}>
                    <FormControl componentClass='textarea' rows='3'
                                 placeholder="Share with your friends..."
                                 style={formStyle}/>
                </PanelBody>
                <PanelFooter className='fg-black75 bg-gray' style={footerStyle}>
                    <Grid>
                        <Row>
                            <Col xs={6} collapseLeft collapseRight>
                                <a href=''>
                                    <Icon className="status-link"
                                        glyph='fa fa-2x fa-plus-square-o'
                                        style={iconStyle}/>
                                </a>
                                <a className="status-link"
                                   href=''>
                                    <Icon
                                        glyph='fa fa-2x fa-picture-o'
                                        style={iconStyle}/>
                                </a>
                                <a className="status-link"
                                   href=''>
                                    <Icon
                                        glyph='fa fa-2x fa-paperclip'
                                        style={iconStyle}/>
                                </a>
                            </Col>
                            <div className='text-right'>
                                <button className='btn theme-button-white'>
                                    Send
                                </button>
                            </div>
                        </Row>
                    </Grid>
                </PanelFooter>
            </div>

        );
    }
}