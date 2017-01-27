import React from 'react';

import '../../scss/group.scss';

export default class GroupNavDropdown extends React.Component {
    static defaultProps = {
        groups: [
            {
                id: "4",
                title: "MATH 140 Homework"
            },
            {
                id: "5",
                title: "COM S 227 Final Review"
            },
            {
                id: "6",
                title: "Digital Logic Learning Community"
            },
            {
                id: "7",
                title: "Sorority Study Group"
            },
            {
                id: "8",
                title: "Physics 221 Project"
            }
        ]
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

        this.getList = this.getList.bind(this);
    }

    getList() {
        return this.props.groups.map(function (group) {
            return (
                <li key={"#tab-"+group.id} >
                    <a href={"#tab-"+group.id}
                       data-toggle="tab">
                        {group.title}
                    </a>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="dropdown-menu">
                {this.getList()}
            </ul>
        );
    }
}