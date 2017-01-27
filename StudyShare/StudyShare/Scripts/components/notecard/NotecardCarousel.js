import React from 'react';
import update from 'react-addons-update';

import NotecardCreate from './NotecardCreate'
import CarouselItem from './CarouselItem';

export default class NotecardCarousel extends React.Component {
    static defaultProps = {
        activeId: 2,
        createFlag: 0,
    };

    state = {
        activeId: 0,
        createFlag: 0,
        notecards: [
            {
                id: 0,
                front: "First Derivative",
                back: "Change in X",
                order: 0
            },
            {
                id: 1,
                front: "Second Derivative",
                back: "Change in X^2",
                order: 1
            },
            {
                id: 2,
                front: "Third Derivative",
                back: "Change in X^3",
                order: 2
            }
        ]

    };

    constructor(props) {
        super(props);

        this.state.activeId = this.props.activeId;
        this.state.createFlag = this.props.createFlag;
        this.rotateLeft = this.rotateLeft.bind(this);
        this.addLeft = this.addLeft.bind(this);
        this.rotateRight = this.rotateRight.bind(this);
        this.addRight = this.addRight.bind(this);
        this.getCarousel = this.getCarousel.bind(this);
    }

    rotateLeft() {
        this.setState(function (prevState, props) {
            prevState.activeId = prevState.activeId -1;
            prevState.createFlag = true;
            return prevState;
        });
    }

    addLeft() {
        var newActive = this.state.activeId-1;
        var newId = this.state.notecards[this.state.notecards.length-1].id +1;
        if (newActive < 0) {
            var newCard = {
                id: newId,
                front: "",
                back: "",
                order: this.state.notecards[this.state.activeId].order -1
            };

            this.setState(function (prevState, props) {
                prevState.activeId = 0;
                prevState.createFlag = true;
                return update(prevState, {notecards: {$unshift: [newCard]}});
            });
        }
    }

    rotateRight() {
        this.setState(function (prevState, props) {
            prevState.activeId = prevState.activeId +1;
            prevState.createFlag = true;
            return prevState;
        });
    }

    addRight() {
        var newActive = this.state.activeId+1;
        var newId = this.state.notecards[this.state.notecards.length-1].id +1;
        if (newActive >= this.state.notecards.length) {
            var newCard = {
                id: newId,
                front: "",
                back: "",
                order: this.state.notecards[this.state.activeId].order -1
            };

            this.setState(function (prevState, props) {
                prevState.activeId = prevState.notecards.length;
                prevState.createFlag = 1;
                return update(prevState, {notecards: {$push: [newCard]}});
            });
        }
    }

    getCarousel(id) {
        var activeNotecard = this.state.notecards[id];
        var left;
        var leftButton;
        if (id <= 0) {
            left = (
                <div className="notecard-carousel carousel-left" onClick={this.addLeft}>
                    <CarouselItem viewId={0}/>
                </div>
            );
            leftButton = (
                <div className="notecard-carousel carousel-left-arrow" onClick={this.addLeft}>
                    <CarouselItem viewId={4}/>
                </div>
            );
        }
        else {
            left = (
                <div className="notecard-carousel carousel-left" onClick={this.rotateLeft}>
                    <CarouselItem notecard={this.state.notecards[id-1]} viewId={1}/>
                </div>
            );
            leftButton = (
                <div className="notecard-carousel carousel-left-arrow" onClick={this.rotateLeft}>
                    <CarouselItem viewId={2}/>
                </div>
            );
        }

        var right;
        var rightButton;
        if (id >= this.state.notecards.length-1) {
            right = (
                <div className="notecard-carousel carousel-right" onClick={this.addRight}>
                    <CarouselItem viewId={0}/>
                </div>
            );
            rightButton = (
                <div className="notecard-carousel carousel-right-arrow" onClick={this.addRight}>
                    <CarouselItem viewId={5}/>
                </div>
            );
        }
        else {
            right = (
                <div className="notecard-carousel carousel-right" onClick={this.rotateRight}>
                    <CarouselItem notecard={this.state.notecards[id+1]} viewId={1}/>
                </div>
            );
            rightButton = (
                <div className="notecard-carousel carousel-right-arrow" onClick={this.rotateRight}>
                    <CarouselItem viewId={3}/>
                </div>
            );
        }

        return {
            left: left,
            leftButton: leftButton,
            right: right,
            rightButton: rightButton
        };
    }

    render() {
        var carousel = this.getCarousel(this.state.activeId);
        return (
            <div className="modal fade" id="addCardModal" tabIndex="-1" role="dialog">
                {carousel.left}
                {carousel.leftButton}
                {carousel.right}
                {carousel.rightButton}
                <NotecardCreate create={this.props.createFlag}
                    notecard={this.state.notecards[this.state.activeId]}/>
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
