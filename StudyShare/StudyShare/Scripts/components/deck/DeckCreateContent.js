import React from 'react';

export default class DeckCreateContent extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        title: "",
        description: "",
        notecards: [
            {
                id: 0,
                order: 1,
                front: "1st Card Front",
                back: "Card Back",
            },
            {
                id: 1,
                order: 2,
                front: "2nd Card Front",
                back: "Card Back",
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getCards = this.getCards.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDesc = this.updateDesc.bind(this);
    }

    updateTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    updateDesc(event) {
        this.setState({
            description: event.target.value
        });
    }

    getCards() {
        this.state.notecards.sort(function(x, y){
            return x.order - y.order;
        });

        return this.state.notecards.map(function (item) {
            return (
                <tr key={"card-"+item.id}>
                    <td>{item.order}</td>
                    <td>{item.front}</td>
                    <td>{item.back}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div style={{"margin": "10px"}}

                 className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">General</h4>
                </div>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <td>
                            <input className="form-control"
                                   type="text"
                                   placeholder="Title"
                                   onChange={this.updateTitle}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <textarea
                                className="form-control"
                                placeholder="Description"
                                onChange={this.updateDesc}/>

                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="panel-heading">
                    <h4 className="panel-title">Notecards</h4>
                </div>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>Order</th>
                        <th>Front</th>
                        <th>Back</th>
                    </tr>
                    {this.getCards()}
                    </tbody>
                </table>
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