import React from 'react';

import {Col} from 'react-bootstrap';

export default class Sidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <Col md={1}>
            <div id="sidebar-container" className="">
                <div id="sidebar-wrapper">
                    <aside id="sidebar">
                        <ul id="sidemenu" className="sidebar-nav">
                            <li>
                                <a href="/">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-home fa-2x"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse"
                                   href="#submenu-2">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-book fa-2x"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        My Content
                                    </span>
                                    <b className="caret"></b>
                                </a>
                                <ul id="submenu-2" className="panel-collapse collapse panel-switch" role="menu">
                                    <li>
                                        <a href="/subjects">
                                            <i className="fa fa-caret-right"></i>Subjects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/notebooks">
                                            <i className="fa fa-caret-right"></i>Notebooks
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/notecards">
                                            <i className="fa fa-caret-right"></i>Notecards
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/animations">
                                            <i className="fa fa-caret-right"></i>Animations
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/explore">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-laptop fa-2x"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        Explore
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/groups">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-graduation-cap fa-2x"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        Groups
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/friends">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-users fa-2x"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        Friends
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
                <main id="page-content-wrapper" role="main">
                </main>
            </div>
            </Col>
        );
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}
}