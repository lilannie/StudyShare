import React from 'react';

import CardHeader from 'CardHeader';

export default class CardTemplate extends React.Component {
    static defaultProps = {

    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" style={{"padding": "0px"}}>
                <div className="card" >
                    <div className="card-content" >
                        <CardHeader title={this.props.title}/>
                        <div className="card-body">
                            {this.props.body}
                        </div>
                        {this.props.actions}
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