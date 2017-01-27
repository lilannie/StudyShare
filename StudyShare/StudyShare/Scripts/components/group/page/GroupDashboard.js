import React from 'react';

import '../../../scss/group-dashboard.scss';

export default class GroupDashboard extends React.Component {
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
            <div className="group-dashboard">
                <div className="dashboard-content">
                    <div className="container-fluid">
                        <div className="content-container">
                            <ul className="content-list">
                                <li className="span3">
                                    <h3>Subjects</h3>
                                    <div className="content">
                                    </div>
                                </li>
                                <li className="span3">
                                    <h3>Notebooks</h3>
                                    <div className="content">
                                    </div>
                                </li>
                                <li className="span3">
                                    <h3>Notecards</h3>
                                    <div className="content">
                                    </div>

                                </li>
                                <li className="span3">
                                    <h3>Discussion</h3>
                                    <div className="content">

                                    </div>
                                </li>
                                <li className="span3">
                                    <h3>Members</h3>
                                    <div className="content">
                                    </div>
                                </li>
                                <li className="span3">
                                    <h3>Settings</h3>
                                    <div className="content">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}