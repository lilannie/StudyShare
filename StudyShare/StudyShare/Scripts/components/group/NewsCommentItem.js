import React from 'react';

export default class NewsCommentItem extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        var commentStyle = {
            borderBottom: '2px solid #EAEDF1',
            color: "#1b6d85",
            paddingBottom: 5,
            fontSize: 18
        };

        var imageStyle = {
            verticalAlign: 'top',
            top: 10,
            position: 'relative',
            float: "left"
        };

        var authorStyle = {
            verticalAlign: 'top',
            top: 10,
            position: 'relative',
            float: "left",
            marginLeft: 10,
            fontSize: 24
        };

        var commentBodyStyle = {
            padding: "20px 10px 10px 60px",
            fontSize: 16
        };

        var timeStampStyle = {
            clear: "left",
            float: "right",
            marginTop: -25
        };

        return (
            <div className='news-comment' style={commentStyle}>
                <img src='/images/avatars/girl.png'
                     width='50' height='50'
                     style={imageStyle}/>
                <div className="author" style={authorStyle}>
                    Anna Sanchez
                </div>
                <div className='time-stamp text-right' style={timeStampStyle}>
                    <small><strong>22 minutes ago</strong></small>
                </div>
                <br/>
                <div className='comment-body' style={commentBodyStyle}>
                    Nice!
                </div>

            </div>
        );
    }
}
