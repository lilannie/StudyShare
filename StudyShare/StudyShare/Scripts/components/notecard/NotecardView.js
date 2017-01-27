import React from 'react';

export default class NotecardView extends React.Component {
    static defaultProps = {
        front: "Front Content"
    };

    state = {
        back: "Back Content"

    };

    constructor(props) {
        super(props);

        this.addCard = this.addCard.bind(this);
    }

    addCard() {
    }

    render() {
        return (
            <div className="modal-body">
                <h3>
                    Front
                </h3>
                <p>
                    {this.props.front}
                </p>
                <hr />
                <h3>
                    Back
                </h3>
                <p>
                    {this.props.back}
                </p>
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
