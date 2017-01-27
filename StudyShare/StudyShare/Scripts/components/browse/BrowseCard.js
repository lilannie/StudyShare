import React from 'react';
import {Link} from 'react-router';

export default class BrowseCard extends React.Component {
    static defaultProps = {
        link: '',
        title: 'Calculus',
        description: "Before studying calculus, all students should complete four years of secondary mathematics designed for college-bound students: courses in which they study algebra, geometry, trigonometry, analytic geometry, and elementary functions. These functions include linear, polynomial, rational, exponential, logarithmic, trigonometric, inverse trigonometric, and piecewise-defined functions"
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="browse-card col-md-2 portfolio-item">
                <Link className="browse-link" to={this.props.link}>
                    <div className="browse-card-body">
                        <div className="ribbon">
                            Share
                        </div>
                        <h2 className="title">
                            {this.props.title}
                        </h2>
                        <div className="description">
                            {this.props.description}
                        </div>
                    </div>
                </Link>
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