import React from 'react';
import {Link} from 'react-router';
import '../../scss/deckitem.scss';

export default class DeckItem extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="deck-item">
                <div className="services">
                    <div className="col-md-4">
                        <figure className="deck-figure teal col-md-4">
                            <figcaption>
                                <h2>{this.props.title}</h2>
                                <p>
                                    {this.props.description}
                                </p>
                                <a href="">View</a>
                                <Link to={"/notecard"}>Edit</Link>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

}