import React from 'react';

export default class NotecardCarouselCard extends React.Component {
    static defaultProps = {
        foo: "bar"
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
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {this.props.view}
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
