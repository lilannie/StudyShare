import React from 'react';

export default class DeckSidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

        this.changeView = this.changeView.bind(this);
    }

    changeView(id) {
        this.props.changeView(id);
    }

    render() {
        if (this.props.viewId == 0) {
            return (
                <ul className="nav nav-pills nav-stacked">
                    <li key="subjects-all" className="active">
                        <a>All Decks</a>
                    </li>
                    <li key="subjects-create">
                        <a onClick={this.changeView.bind(null, 1)}>Create</a>
                    </li>
                </ul>
            );
        }
        return (
            <ul className="nav nav-pills nav-stacked">
                <li key="subjects-all">
                    <a onClick={this.changeView.bind(null, 0)}>All Decks</a>
                </li>
                <li key="subjects-create" className="active">
                    <a>Create</a>
                </li>
            </ul>
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