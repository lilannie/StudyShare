import React from 'react';

import {
    Sidebar, SidebarNav, SidebarNavItem,
    SidebarControls, SidebarControlBtn,
    LoremIpsum, Grid, Row, Col, FormControl,
    Label, Progress, Icon,
    SidebarDivider
} from '@sketchpixy/rubix';

import {Link, withRouter} from 'react-router';

@withRouter
class ApplicationSidebar extends React.Component {
    handleChange(e) {
        this._nav.search(e.target.value);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <FormControl type='text' placeholder='Search...' onChange={::this.handleChange}
                                         className='sidebar-search' style={{
                                border: 'none',
                                background: 'none',
                                margin: '10px 0 0 0',
                                borderBottom: '1px solid #666',
                                color: 'white'
                            }}/>
                            <div className='sidebar-nav-container'>
                                <SidebarNav style={{marginBottom: 0}} ref={(c) => this._nav = c}>

                                    { /** Pages Section */ }
                                    <div className='sidebar-header'>CONTENT</div>

                                    <SidebarNavItem glyph='icon-fontello-home' name='Home' href='/'/>
                                    <SidebarNavItem glyph='icon-ikons-grid-1' name='Subjects' href='/subjects'/>
                                    <SidebarNavItem glyph='icon-simple-line-icons-notebook' name='Notes' href='/notes'/>
                                    <SidebarNavItem glyph='icon-simple-line-icons-layers' name='Notecards' href='/notecards'/>
                                    <SidebarNavItem glyph='icon-simple-line-icons-loop' name='Animations' href='/animations'/>

                                    <div className='sidebar-header'>BROWSE</div>

                                    <SidebarNavItem glyph='icon-fontello-gauge' name='Dashboard' href='/dashboard'/>
                                    <SidebarNavItem glyph='icon-simple-line-icons-eyeglasses' name='Explore' href='/explore'/>
                                    <SidebarNavItem glyph='icon-simple-line-icons-bubble' name='Discussions' href='/discussions'/>

                                    <div className='sidebar-header'>GROUPS</div>

                                    <SidebarNavItem glyph='icon-simple-line-icons-users' name='Friends' href='/friends'/>
                                    <SidebarNavItem glyph='icon-simple-line-icons-graduation' name='Classes' href='/classes'/>

                                    <div className='sidebar-header'>SETTINGS</div>



                                </SidebarNav>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

class DummySidebar extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div className='sidebar-header'>DUMMY SIDEBAR</div>
                        <LoremIpsum query='1p'/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

@withRouter
export default class SidebarContainer extends React.Component {
    render() {
        return (
            <div id='sidebar'>
                <div id='avatar'>
                    <Grid>
                        <Row className='fg-white'>

                            <Col xs={20} collapseLeft id='avatar-col'>
                                <div style={{top: 23, fontSize: 25, left: 20, lineHeight: 1, position: 'relative'}}>
                                    Annie Steenson
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <SidebarControls>
                    <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0}/>
                    <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1}/>
                    <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2}/>
                    <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3}/>
                    <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4}/>
                </SidebarControls>
                <div id='sidebar-container'>
                    <Sidebar sidebar={0}>
                        <ApplicationSidebar />
                    </Sidebar>
                    <Sidebar sidebar={1}>
                        <DummySidebar />
                    </Sidebar>
                    <Sidebar sidebar={2}>
                        <DummySidebar />
                    </Sidebar>
                    <Sidebar sidebar={3}>
                        <DummySidebar />
                    </Sidebar>
                    <Sidebar sidebar={4}>
                        <DummySidebar />
                    </Sidebar>
                </div>
            </div>
        );
    }
}
