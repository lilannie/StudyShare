import React from 'react';

import {
    ButtonToolbar,
    ButtonGroup,
    Button,
    Glyphicon
}
    from 'react-bootstrap';

export default class NotecardDelete extends React.Component {
    static defaultProps = {
        foo: "bar"
    };

    state = {
        foo: "bar"

    };

    constructor(props) {
        super(props);

        this.changeView = this.changeView.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    changeView() {

    }

    deleteCard() {
    }

    render() {
        return (
            <div id="deleteCardModal" className="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h3>Are you sure you want to delete these?</h3>
                        </div>
                        <div className="modal-body">

                            <ButtonToolbar className="content-toolbar">
                                <ButtonGroup>
                                    <Button onClick={this.changeView}
                                            bsStyle="danger" data-dismiss="modal">
                                        <Glyphicon glyph="remove"/> Cancel
                                    </Button>
                                    <Button onClick={this.deleteCard}
                                            bsStyle="success">
                                        <Glyphicon glyph="okay"/> Yes
                                    </Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </div>
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
