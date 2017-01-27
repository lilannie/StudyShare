import React from 'react';

export default class SubjectDelete extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleChangeView = this.handleChangeView.bind(this);
    }

    handleDelete() {
        this.props.handleDelete();
    }

    handleChangeView(id) {
        this.props.changeView(id);
    }

    render() {
        return (
            <div style={{"minWidth": "1325px"}}
                 className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">Delete</h4>
                </div>

                <div className="panel-body">
                    <button type="button" className="btn delete-warning"
                            onClick={this.handleDelete}>Delete</button>
                    <button type="button" className="btn"
                            onClick={this.handleChangeView.bind(null, 0)}>Cancel</button>
                </div>
            </div>
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