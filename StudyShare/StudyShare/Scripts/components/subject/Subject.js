import React from 'react';

import {Row, Col} from 'react-bootstrap';
import SubjectSidebar from './SubjectSidebar';
import SubjectContent from './SubjectContent';
import SubjectCreate from './SubjectCreate';
import ContentHeader from 'ContentHeader';

export default class Subject extends React.Component {
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
    }

    changeView(viewId) {
        // console.log("Subject - Change View");
        // console.log("viewId: "+viewId);
        // console.log("Prev State: "+JSON.stringify(this.state));
        this.setState({view: viewId})
;    }

    getView() {
        switch(this.state.view) {
            case 0: {
                return <SubjectContent changeView={this.changeView}/>;
            }
            case 1: {
                return <SubjectCreate changeView={this.changeView}/>;
            }
        }
    }

    render() {
        return (
            <div className="subject" >
                <ContentHeader title="Subjects" />
                <div className="subject-content-wrapper">
                    <Row>
                        <Col md={1} style={{"padding": "0px"}}>
                            <SubjectSidebar active={this.state.view}
                                            changeView={this.changeView}/>
                        </Col>
                        <Col md={9} style={{"padding": "0px",
                                    "margin": "10px"}}
                            className="subject-content container-fluid ">

                            {this.getView()}

                        </Col>
                    </Row>
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