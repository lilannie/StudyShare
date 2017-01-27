import React from 'react';

export default class SubjectEdit extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        title: this.props.title,
        description: this.props.description
    };

    constructor(props) {
        super(props);

        this.updateTitle = this.updateTitle.bind(this);
        this.updateDesc = this.updateDesc.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    updateTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    updateDesc(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleSave() {
        // console.log("SubjectEdit -- Handle Save");
        // console.log("Title: "+this.state.title);
        // console.log("Description: "+this.state.title);
        this.props.handleEdit(this.state.title, this.state.description);
    }

    render() {
        return (
            <div style={{"minWidth": "1325px"}}
                 className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">Edit</h4>
                </div>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <td>
                            <input className="form-control"
                                   type="text"
                                   defaultValue={this.props.title}
                                   placeholder="Title"
                                    onChange={this.updateTitle}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <textarea
                                className="form-control"
                                defaultValue={this.props.description}
                                placeholder="Description"
                                onChange={this.updateDesc}/>

                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="panel-body">
                    <button type="button" className="pull-right btn"
                        onClick={this.handleSave}>Save</button>
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