import React from 'react';

import CardTemplate from 'CardTemplate';
import CardActions from 'CardActions';
import SubjectCreateContent from './SubjectCreateContent';

export default class SubjectHeader extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
    }

    handleSave() {

    }

    render() {
        var body = <SubjectCreateContent/>;
        var actionsList = [
            <li key="subject-save">
                <a className="card-action-grey"
                   onClick={this.handleSave}>Save</a>
            </li>
        ];
        var actions = <CardActions actions={actionsList}/>;
        return (
            <div>
                <CardTemplate title="Create"
                              body={body} actions={actions}/>

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