import React from 'react';

import BrowseCard from './BrowseCard';
import BrowseCardDeckCaption from './BrowseCardDeckCaption';


export default class BrowseRow extends React.Component {
    static defaultProps = {
        items: [
            {
                title: "German Kitchen Vocabulary",
                description: (
                    <BrowseCardDeckCaption numCards={100}/>
                )
            },
            {
                title: "Linear Data Structures",
                description: (
                    <BrowseCardDeckCaption numCards={30}/>
                )
            },
            {
                title: "Ancient Persian Art",
                description: (
                    <BrowseCardDeckCaption numCards={17}/>
                )
            },
            {
                title: "Search Algorithms",
                description: (
                    <BrowseCardDeckCaption numCards={50}/>
                )
            },
            {
                title: "Chocolate Chip Cookie Recipes",
                description: (
                    <BrowseCardDeckCaption numCards={73}/>
                )
            }
        ]
    };

    state = {
        foo: 'bar'
    };


    constructor(props) {
        super(props);

        this.getCards = this.getCards.bind(this);
    }

    getCards() {
        let type = this.props.type;
        return this.props.items.map(function(item) {
            let url = "";
            let key = "";
            if (type === "Subjects") {
                url = "/subjects";
                key = "subject-";
            } else if (type === "Notebooks") {
                url = "/notebooks";
                key = "notebook-";
            } else {
                url = "/notecards";
                key = "notecards-";
            }

            return (
                <BrowseCard
                    key={key+item.id}
                    link={url} title={item.title}
                    description={item.description}/>
            );
        });
    }

    render() {
        return (
            <div className="row">
                {this.getCards()}
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