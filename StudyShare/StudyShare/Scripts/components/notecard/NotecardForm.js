import React from 'react';
import RichEditor from 'RichEditor';

export default class NotecardForm extends React.Component {
    static defaultProps = {
        front: "FRONT SIDE TEXT",
        back: "BACK SIDE TEXT"
    };

    state = {
        front: "",
        back: ""
    };

    constructor(props) {
        super(props);

        this.state.front = this.props.front;
        this.state.back = this.props.back;
        this.updateFront = this.updateFront.bind(this);
        this.updateBack = this.updateBack.bind(this);
    }

    updateFront() {
        this.setState({front: event.target.value});
    }

    updateBack(event) {
        this.setState({back: event.target.value});
    }

    render() {
        return (
            <div className="modal-body">
                <h5>
                    Front
                </h5>
                <textarea className="form-control" placeholder="Front"
                          value={this.state.front} onChange={this.updateFront} />
                <hr/>
                <h5>
                    Back
                </h5>
                <textarea className="form-control" placeholder="Back"
                          value={this.state.back}  onChange={this.updateBack}/>
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
