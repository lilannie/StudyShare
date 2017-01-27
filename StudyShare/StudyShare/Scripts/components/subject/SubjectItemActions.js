import React from 'react';

export default class SubjectItem extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.changeView(id);
    }


    render() {
        return (
            <nav className="nav-tabs">
                <ul className="nav nav-pills pull-left">
                    <li>
                        <a className="card-action-grey"
                           onClick={this.handleClick.bind(null, 0)}>About</a>
                    </li>
                    <li>
                        <a className="card-action-grey"
                           onClick={this.handleClick.bind(null, 1)}>Edit</a>
                    </li>
                    <li>
                        <a className="card-action-grey"
                           onClick={this.handleClick.bind(null, 2)}>Delete</a>
                    </li>
                    <li>
                        <a className="card-action-grey" >Share</a>
                    </li>
                </ul>
            </nav>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

}