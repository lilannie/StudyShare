import React from 'react';
import NotecardCarouselCard from './NotecardCarouselCard';
import NotecardView from './NotecardView';

export default class CarouselItem extends React.Component {
    static defaultProps = {
        viewId: 0,
        notecard: {
            id: 0,
            front: "First Derivative",
            back: "Change in X"
        },
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
        switch (this.props.viewId) {
            case 0: {
                return (
                    <div className="card-grey">
                        <NotecardCarouselCard  />
                    </div>
                );
            }
            case 1: {
                return (
                    <div className="card-blue">
                        <NotecardCarouselCard
                                view={<NotecardView
                                front={this.props.notecard.front}
                                back={this.props.notecard.back}/>}/>
                    </div>
                );
            }
            case 2: {
                return (
                    <div className="left-arrow">
                        <NotecardCarouselCard
                            view={
                                <div className="center-vertical">
                                    <i className="fa fa-4x fa-angle-left"></i>
                                </div>}/>
                    </div>
                );
            }
            case 3: {
                return (
                    <div className="right-arrow">
                        <NotecardCarouselCard
                            view={
                                <div className="center-vertical">
                                    <i className="fa fa-4x fa-angle-right"></i>
                                </div>}/>
                    </div>
                );
            }
            case 4: {
                return (
                    <div className="left-plus">
                        <NotecardCarouselCard
                            view={
                                <div className="center-vertical">
                                    <i className="fa fa-2x fa-plus"></i>
                                </div>}/>
                    </div>
                );
            }
            case 5: {
                return (
                    <div className="right-plus">
                        <NotecardCarouselCard
                            view={
                                <div className="center-vertical">
                                    <i className="fa fa-2x fa-plus"></i>
                                </div>}/>
                    </div>
                );
            }
            default: {
                return (
                    <div>

                    </div>
                );
            }
        }
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
