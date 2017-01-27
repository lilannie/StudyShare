import React from 'react';

import CardHeader from 'CardHeader';
import SubjectItemContent from './SubjectItemContent';
import SubjectItemActions from './SubjectItemActions';
import SubjectEdit from './SubjectEdit';
import SubjectDelete from './SubjectDelete';

export default class SubjectItem extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);

        this.changeView = this.changeView.bind(this);
        this.getView = this.getView.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    changeView(viewId) {
        this.setState({view: viewId});
    }

    handleEdit(title, description) {
        // console.log("SubjectItem -- Handle Edit");
        // console.log("Id: "+this.props.id);
        // console.log("Title: "+title);
        // console.log("Description: "+description);
        // console.log("Content: "+JSON.stringify(this.props.content));

        this.props.handleEdit(
            {
                id: this.props.id,
                title: title,
                description: description,
                content: this.props.content,
            }
        );
    }

    handleDelete() {
        // console.log("SubjectItem -- Handle Delete");
        // console.log("Id: "+this.props.id);
        this.props.handleDelete(this.props.id);
    }


    getView() {
        switch (this.state.view) {
            case 0: {
                return <SubjectItemContent
                    description={this.props.description}
                    content={this.props.content}/>;
            }
            case 1: {
                return <SubjectEdit
                    title={this.props.title}
                    description={this.props.description}
                    handleEdit={this.handleEdit}/>;
            }
            case 2: {
                return <SubjectDelete
                    changeView={this.changeView}
                    handleDelete={this.handleDelete}/>;
            }
        }
    }


    render() {
        return (
            <div className="container-fluid" style={{"padding": "0px"}}>
                <div className="card">
                    <div className="card-content">
                        <CardHeader title={this.props.title}/>
                        <div className="card-body">
                            {this.getView()}
                        </div>
                        <SubjectItemActions changeView={this.changeView}/>
                    </div>
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