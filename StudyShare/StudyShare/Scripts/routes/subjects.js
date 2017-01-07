import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';

import {
    Row,
    Col,
    Icon,
    Grid,
    Label,
    Badge,
    Panel,
    Button,
    PanelLeft,
    PanelBody,
    ListGroup,
    LoremIpsum,
    ButtonGroup,
    ButtonToolbar,
    ListGroupItem,
    PanelContainer,
} from '@sketchpixy/rubix';

class SubjectNavItem extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={8} collapseLeft collapseRight>
                        <Icon glyph={this.props.glyph} className='inbox-item-icon'/>
                        <span>  {this.props.title}</span>
                    </Col>
                    <Col xs={4} className='text-right' collapseLeft collapseRight>
                        <div style={{marginTop: 5}}><Label className={this.props.labelClass}>{this.props.labelValue}</Label></div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

class InboxNavTag extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} collapseLeft collapseRight>
                        <Badge className={this.props.badgeClass}>{' '}</Badge>
                        <span>{this.props.title}</span>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

@withRouter
class SubjectItem extends React.Component {
    handleClick(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.router.push('/ltr/mailbox/mail');
    }
    render() {
        var classes = classNames({
            'inbox-item': true,
            'unread': this.props.unread
        });

        var linkProps = {
            href: '/ltr/mailbox/mail',
            onClick: ::this.handleClick,
            className: classes,
        };

        return (
            <a {...linkProps}>
                <div className='inbox-avatar'>
                    <div className='inbox-date hidden-sm hidden-xs fg-darkgray40 text-right'>
                        <div style={{position: 'relative'}}>{this.props.date}</div>
                    </div>
                    <div className='inbox-avatar-name'>
                        <div className='fg-darkgrayishblue75'>{this.props.name}</div>
                        <div><small><Badge className={this.props.labelClass} style={{marginRight: 5, display: this.props.labelValue ? 'inline':'none'}}>{this.props.labelValue}</Badge><span>{this.props.description}</span></small></div>
                    </div>

                </div>
            </a>
        );
    }
}

@withRouter
export default class Subjects extends React.Component {
    handleClick(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.router.push('/ltr/mailbox/compose');
    }

    render() {
        return (
            <div>
                <PanelContainer className='subjects' collapseBottom>
                    <Panel>
                        <PanelBody style={{paddingTop: 0}}>
                            <Grid>
                                <Row>
                                    <Col xs={8} style={{paddingTop: 12.5, paddingBottom: 12.5}}>
                                        <ButtonToolbar className='inbox-toolbar'>
                                            <ButtonGroup>
                                                <Button bsStyle='blue' onClick={::this.handleClick}>
                                                    <Icon glyph='icon-fontello-edit-1'/>
                                                </Button>
                                            </ButtonGroup>
                                            <ButtonGroup className='hidden-xs'>
                                                <Button outlined onlyOnHover bsStyle='success' className='text-center'><Icon glyph=''/>Edit</Button>
                                                <Button outlined onlyOnHover bsStyle='danger'><Icon glyph='icon-fontello-trash-1'/></Button>
                                            </ButtonGroup>
                                        </ButtonToolbar>
                                    </Col>
                                    <Col xs={4} style={{paddingTop: 12.5, paddingBottom: 12.5}} className='text-right'>
                                        <div className='inbox-avatar'>
                                            <div className='inbox-avatar-name hidden-xs hidden-sm'>
                                                <div>Subjects</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </Grid>
                            <hr style={{margin: 0}}/>
                            <Panel horizontal>
                                <PanelLeft className='panel-sm-3 inbox-nav hidden-xs'>
                                    <Grid>
                                        <Row>
                                            <Col xs={12}>
                                                <h6><small className='fg-darkgray'>SUBJECTS</small></h6>
                                                <ListGroup className='list-bg-blue'>
                                                    <ListGroupItem active>
                                                        <SubjectNavItem title='Calculus' />
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <SubjectNavItem title='Physics' />
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <SubjectNavItem title='Data Structures' />
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <SubjectNavItem title='English' />
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <SubjectNavItem title='Algorithms' />
                                                    </ListGroupItem>
                                                </ListGroup>
                                                <hr/>
                                                <h6><small className='fg-darkgray'>TAGS</small></h6>
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        <InboxNavTag title='#classes' badgeClass='bg-green fg-white' />
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <InboxNavTag title='#fun' badgeClass='bg-red fg-white' />
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </PanelLeft>
                                <PanelBody className='panel-sm-9 panel-xs-12' style={{ paddingTop: 0 }}>
                                    <Grid>
                                        <Row>
                                            <h3>Content</h3>
                                            <Col xs={12}>
                                                <SubjectItem itemId={1} unread  imgClass='border-green' name='Derivatives' labelValue='SOME LABEL' labelClass='bg-green fg-white' description={<span><strong>Early access: </strong><span><LoremIpsum query='1s'/></span></span>} date='Aug 20th' />
                                                <SubjectItem itemId={2} unread  imgClass='border-orange' name='Integrals' labelValue='SOME LABEL' labelClass='bg-orange fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 19th' />
                                                <SubjectItem itemId={3} unread  imgClass='border-blue' name='Summations' labelValue='SOME LABEL' labelClass='bg-blue fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 18th' />
                                                <SubjectItem itemId={4} unread  imgClass='border-red' name='Rotations' labelValue='SOME LABEL' labelClass='bg-red fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 17rd' />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </PanelBody>
                            </Panel>
                        </PanelBody>
                    </Panel>
                </PanelContainer>
            </div>
        );
    }
}
