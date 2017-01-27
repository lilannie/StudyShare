import React from 'react';

import {
    FormControl,
    PanelFooter,
} from '@sketchpixy/rubix';

export default class NewsCommentBox extends React.Component {
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
        var footerStyle = {
            padding: 25
        };

        var inputStyle = {
            width: 550,
            minHeight: 55,
            maxWidth: 550
        };

        var buttonStyle = {
            height: 55,
        };

        return (
            <PanelFooter style={footerStyle}>
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="comment" className="sr-only">Comment</label>
                        <textarea type="text" className="form-control theme-input"
                               id="commentbox" placeholder="Comment"
                                style={inputStyle}/>
                        <button type="submit" style={buttonStyle}
                                className="btn theme-button-white">
                            Send
                            <i className="fa fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
            </PanelFooter>
        );
    }
}