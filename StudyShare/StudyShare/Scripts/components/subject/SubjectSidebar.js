import React from 'react';

export default class SubjectSidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

        this.handleChangeView = this.handleChangeView.bind(this);
    }

    handleChangeView(viewId) {
        // console.log("SubjectSidebar - Handle Change View");
        this.props.changeView(viewId);
    }

    render() {
        var view;
        if (this.props.active == 0) {
            view = [
                <li key="subjects-all" className="active" onClick={this.handleChangeView.bind(null, 0)}><a>All Subjects</a></li>,
                <li key="subjects-create" onClick={this.handleChangeView.bind(null, 1)}><a>Create</a></li>
            ];
        }
        else {
            view = [
                <li key="subjects-all" onClick={this.handleChangeView.bind(null, 0)}><a>All Subjects</a></li>,
                <li key="subjects-create" className="active" onClick={this.handleChangeView.bind(null, 1)}><a>Create</a></li>
            ];
        }
        return (
            <div id="subject-sidebar" className="well ">
                <ul className="nav nav-pills nav-stacked">
                    {view}
                </ul>
            </div>
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