import React from 'react';

export default class SubjectCreateContent extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        title: "",
        description: "",
        content: [
            {
                id: 0,
                title: "Derivatives",
                type: "Notebook",
                description: "Brief overview of derivatives",
                date_created: "01/01/2017",
                last_modified: "01/07/2017"
            },
            {
                id: 1,
                title: "Integrals",
                type: "Notecards",
                description: "Brief overview of integrals",
                date_created: "01/01/2017",
                last_modified: "01/07/2017"
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getContent = this.getContent.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDesc = this.updateDesc.bind(this);
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

    getContent() {
        return this.state.content.map(function (item) {
            return (
                <tr key={"content-"+item.id}>
                    <td>{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.description}</td>
                    <td>{item.date_created}</td>
                    <td>{item.last_modified}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">General</h4>
                </div>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <td>
                            <input className="form-control"
                                   type="text"
                                   placeholder="Title"
                                   onChange={this.updateTitle}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <textarea
                                className="form-control"
                                placeholder="Description"
                                onChange={this.updateDesc}/>

                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="panel-heading">
                    <h4 className="panel-title">Content</h4>
                </div>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th>Last Modified</th>
                    </tr>
                    {this.getContent()}
                    </tbody>
                </table>
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