import React from 'react';
import UserDropDown from './header/UserDropDown';
import HeaderSearch from './header/HeaderSearch';

export default class Header extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    handleSelect(selectedKey) {

    }

    render() {
        return (
            <header id="header">
                <nav className="col-md-12 navbar navbar-default navbar-fixed-top"
                    role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>
                        <div id="navbar-collapse" className="collapse navbar-collapse">

                            <HeaderSearch />
                            <UserDropDown />

                            <a className="navbar-brand navbar-left" href="#">
                                <img className="header-logo" src="images/app/logo-light.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
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