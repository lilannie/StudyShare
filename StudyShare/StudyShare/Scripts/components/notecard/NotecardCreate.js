import React from 'react';
import NotecardForm from './NotecardForm';

export default class NotecardCreate extends React.Component {
    static defaultProps = {
        create: false,
        front: "",
        back: ""
    };

    state = {
        foo: "bar"

    };

    constructor(props) {
        super(props);

        this.addCard = this.addCard.bind(this);
    }

    addCard() {

    }

    render() {
        var title = "";
        if (this.props.create) {
            title = "Add Notecard";
        }
        else {
            title = "Edit Notecard";
        }

        return (
            <div className="modal-dialog notecard-create" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                            {title}
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" >
                            <span>&times;</span>
                        </button>
                    </div>
                    <NotecardForm front={this.props.notecard.front}
                                  back={this.props.notecard.back}/>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
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
