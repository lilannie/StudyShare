import React from 'react';

import '../../scss/group.scss';

export default class NavDropdown extends React.Component {
    static defaultProps = {
        active: false,
        tabId: "#tab-0",
        content: (<h1>FAKE CONTENT</h1>),
        menu: (
            <ul className="dropdown-menu">
                <li><a href="">FAKE MENU</a></li>
                <li><a href="">FAKE MENU</a></li>
                <li><a href="">FAKE MENU</a></li>
                <li><a href="">FAKE MENU</a></li>
            </ul>
        )
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
            <li className="dropdown">
                <a className="dropdown-toggle"
                   data-toggle="dropdown">
                    <h3>
                        {this.props.title} <span className="caret"></span>
                    </h3>
                </a>
                {this.props.menu}
            </li>
        );
    }
}