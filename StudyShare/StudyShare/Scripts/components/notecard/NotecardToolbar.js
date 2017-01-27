import React from 'react';

import {ButtonToolbar,
    ButtonGroup,
    Button,
    Glyphicon}
    from 'react-bootstrap';
import {Link} from 'react-router';

export default class NotecardToolbar extends React.Component {
    static defaultProps = {
        foo: "bar"
    };

    state = {
        foo: "bar"

    };

    constructor(props) {
        super(props);

        this.addCard = this.addCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.editCard = this.editCard.bind(this);
    }

    addCard() {
    }

    deleteCard() {
    }

    editCard() {
    }

    render() {
        return (
            <ButtonToolbar className="content-toolbar">
                <ButtonGroup>
                    <Button onClick={this.addCard}
                            data-toggle="modal"
                            data-target="#addCardModal">
                        <Glyphicon glyph="plus" /> Add
                    </Button>
                    <Button onClick={this.deleteCard}
                            data-toggle="modal"
                            data-target="#deleteCardModal">
                        <Glyphicon glyph="minus" /> Delete
                    </Button>
                    <Button onClick={this.editCard}
                            data-toggle="modal"
                            data-target="#editCardModal">
                        <Glyphicon glyph="pencil" /> Edit
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>
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
