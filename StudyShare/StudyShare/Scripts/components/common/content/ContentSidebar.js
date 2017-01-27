import React from 'react';

export default class ContentSidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);

        this.handleChangeView = this.handleChangeView.bind(this);
    }

    handleChangeView(viewId) {
        // console.log("SubjectSidebar - Handle Change View");
        this.props.changeView(viewId);
        this.setState({view: viewId});
    }



    render() {
        // List
        // <li key="subjects-all" onClick={this.handleChangeView.bind(null, 0)}><a>All Subjects</a></li>,
        // <li key="subjects-create" className="active" onClick={this.handleChangeView.bind(null, 1)}><a>Create</a></li>

        return (
            <div id="subject-sidebar" className="well ">

                    {this.props.list}
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