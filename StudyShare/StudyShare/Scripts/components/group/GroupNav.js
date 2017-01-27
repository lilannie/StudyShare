import React from 'react';

import {Row, Col} from 'react-bootstrap';

import GroupNavTab from './GroupNavTab';
import GroupNavContent from './GroupNavContent';
import GroupNewsFeed from './GroupNewsFeed';
import NavDropdown from './NavDropdown';
import GroupNavDropdown from './GroupNavDropdown';
import GroupPage from './page/GroupPage';

import '../../scss/group.scss';

export default class GroupNav extends React.Component {
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
            <div className="group-nav">
                <div className="col-xs-9">
                    <Row>
                        <div id="group-nav" className="container-fluid">
                            <ul className="nav nav-pills">
                                <GroupNavTab active={true}
                                             title={'Timeline'}
                                             tabId={'#tab-0'}/>
                                <NavDropdown active={false}
                                             title={'Groups'}
                                             tabId={'#tab-1'}
                                            menu={<GroupNavDropdown />}/>
                                <GroupNavTab active={false}
                                             title={'Settings'}
                                             tabId={'#tab-2'}/>
                            </ul>

                            <div className="tab-content clearfix">
                                <GroupNavContent tabId={"tab-0"}
                                                 content={<GroupNewsFeed />}
                                                 active={true}/>
                                <GroupNavContent tabId={"tab-2"}
                                                 content={<GroupNewsFeed />}
                                                 active={false}/>
                                <GroupNavContent tabId={"tab-4"}
                                                 content={
                                     <GroupPage title="MATH 140 Homework"/>}
                                                 active={false}/>
                                <GroupNavContent tabId={"tab-5"}
                                                 content={
                                     <GroupPage title="COM S 227 Final Review"/>}
                                                 active={false}/>
                                <GroupNavContent tabId={"tab-6"}
                                                 content={
                                     <GroupPage title="Digital Logic Learning Community"/>}
                                                 active={false}/>
                                <GroupNavContent tabId={"tab-7"}
                                                 content={
                                     <GroupPage title="Sorority Study Group"/>}
                                                 active={false}/>
                                <GroupNavContent tabId={"tab-8"}
                                                 content={
                                     <GroupPage title="Physics 221 Project"/>}
                                                 active={false}/>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        );
    }
}