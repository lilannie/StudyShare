import React from 'react';

export default class SubjectItemContent extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

        this.getContent = this.getContent.bind(this);
    }

    getContent() {
        return this.props.content.map(function (item) {
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
                    <h4 className="panel-title">Description</h4>
                </div>
                <div className="panel-body">
                    {this.props.description}
                </div>

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