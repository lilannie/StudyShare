import React from 'react';

import ContentHeader from 'ContentHeader';
import BrowseRow from './browse/BrowseRow';
import BrowseRowHeader from './browse/BrowseRowHeader';
import BrowseCardDeckCaption from './browse/BrowseCardDeckCaption';
import '../scss/index.scss';

export default class Index extends React.Component {
    static defaultProps = {
    };

    state = {
        content: [
            {
                id: 0,
                type: "Subjects",
                items: [
                    {
                        id: 0,
                        title: 'Calculus I',
                        description: "Before studying calculus, all students should complete four years of secondary mathematics designed for college-bound students: courses in which they study algebra, geometry, trigonometry, analytic geometry, and elementary functions. These functions include linear, polynomial, rational, exponential, logarithmic, trigonometric, inverse trigonometric, and piecewise-defined functions"
                    },
                    {
                        id: 1,
                        title: "Computer Science Algorithms",
                        description: "What are algorithms and why should you care? We'll start with an overview of algorithms and then discuss two games that you could use an algorithm to solve more efficiently - the number guessing game and a route-finding game.",
                    },
                    {
                        id: 2,
                        title: "Chemistry",
                        description: "Chemistry is the science of matter at or near the atomic scale. (Matter is the substance of which all physical objects are made.) Chemistry deals with the properties of matter, and the transformation and interactions of matter and energy. Central to chemistry is the interaction of one substance with another, such as in a chemical reaction, where a substance or substances are transformed into another."
                    },
                    {
                        id: 3,
                        title: "American Government",
                        description: "The Federal Government of the United States is the federal government of the United States, a republic in North America, composed of 50 states, one district, Washington, D.C. (the nation's capital), and several territories. The federal government is composed of three distinct branches: legislative, executive, and judicial, whose powers are vested by the U.S. Constitution in the Congress, the President, and the federal courts, including the Supreme Court, respectively."
                    },
                    {
                        id: 4,
                        title: "Spanish I",
                        description: "This  online audio lesson will teach you how to describe people in Spanish. With these Spanish adjectives on hand you'll be able to talk about a person’s appearance in Spanish and the kind of person they are as well."
                    }
                ]
            },
            {
                id: 1,
                type: "Notebooks",
                items: [
                    {
                        id: 0,
                        title: "Civil War",
                        description: "List of all major events and dates."
                    },
                    {
                        id: 1,
                        title: "Linear Functions",
                        description: (<div className="body-list"><ul>
                            <li>Definition of Linear Functions</li>
                            <li>Identifying Linear Functions</li>
                            <li>Working with Linear Functions</li>
                        </ul></div>)
                    },
                    {
                        id: 2,
                        title: "Chemical Compounds",
                        description: (<div className="body-list"><ul>
                            <li>Ionic Bonds</li>
                            <li>Hydrogen Bonds</li>
                            <li>Covalent Bonds</li>
                        </ul></div>)
                    },
                    {
                        id: 3,
                        title: "Photosynthesis",
                        description: "Detailed analysis of the process and mechanisms in photosynthesis."
                    },
                    {
                        id: 4,
                        title: "Create your own website",
                        description: (<div className="body-list"><ul>
                            <li>For Beginners</li>
                            <li>HTML CSS JavaScript</li>
                            <li>In-note animations and multimedia</li>
                        </ul></div>)
                    }
                ]
            },
            {
                id: 2,
                type: "Notecards",
                items: [
                    {
                        id: 0,
                        title: "German Kitchen Vocabulary",
                        description: (
                            <BrowseCardDeckCaption numCards={100}/>
                        )
                    },
                    {
                        id: 1,
                        title: "Linear Data Structures",
                        description: (
                            <BrowseCardDeckCaption numCards={30}/>
                        )
                    },
                    {
                        id: 2,
                        title: "Ancient Persian Art",
                        description: (
                            <BrowseCardDeckCaption numCards={17}/>
                        )
                    },
                    {
                        id: 3,
                        title: "Search Algorithms",
                        description: (
                            <BrowseCardDeckCaption numCards={50}/>
                        )
                    },
                    {
                        id: 4,
                        title: "Chocolate Chip Cookie Recipes",
                        description: (
                            <BrowseCardDeckCaption numCards={73}/>
                        )
                    }
                ]
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getContentRows = this.getContentRows.bind(this);
    }

    getContentRows() {
        return this.state.content.map(function (type) {
            return (
                <div key={"type-" + type.id}>
                    <BrowseRowHeader title={type.type}/>
                    <BrowseRow type={type.type} items={type.items}/>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="index-page">
                <div className="container-fluid">
                    <ContentHeader title="My Content"/>
                    <div className="index-body">
                        {this.getContentRows()}
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