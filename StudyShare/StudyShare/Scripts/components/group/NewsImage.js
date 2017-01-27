import React from 'react';

import {Image} from '@sketchpixy/rubix';

import '../../scss/group.scss';

export default class NewsImage extends React.Component {
    static defaultProps = {
        src: '/images/gallery/working.jpg'
    };

    state = {
        foo: 'bar'
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        var imageStyle = {
            margin: "0px -11px 0px -11px",
            "overflow": "hidden"
        };

        return (
            <div className="news-image" style={imageStyle}>
                <Image responsive
                       src={this.props.src}/>
            </div>

        );
    }
}