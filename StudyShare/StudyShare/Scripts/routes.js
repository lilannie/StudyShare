import React from 'react';
import classNames from 'classnames';
import {Router, IndexRoute, Route} from 'react-router';

import {Grid, Row, Col, MainContainer} from '@sketchpixy/rubix';

import Footer from './common/footer';
import Header from './common/header';
import Sidebar from './common/sidebar';

import Home from './routes/home';
import Subjects from './routes/subjects';
import Notes from './routes/notes';
import Notecards from './routes/notecards';
import Animations from './routes/animations';
import Dashboard from './routes/dashboard';
import Explore from './routes/explore';
import Discussions from './routes/discussions';
import Friends from './routes/friends';
import Classes from './routes/classes';

class App extends React.Component {
    render() {
        return (
            <MainContainer {...this.props}>
                <Sidebar />
                <Header />
                <div id='body'>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <Footer />
            </MainContainer>
        );
    }
}

export default (
    <Router >
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
        </Route>
        <Route path='/subjects' component={App}>
            <IndexRoute component={Subjects} />
        </Route>
        <Route path='/notes' component={App}>
            <IndexRoute component={Notes} />
        </Route>
        <Route path='/notecards' component={App}>
            <IndexRoute component={Notecards} />
        </Route>
        <Route path='/animations' component={App}>
            <IndexRoute component={Animations} />
        </Route>
        <Route path='/dashboard' component={App}>
            <IndexRoute component={Dashboard} />
        </Route>
        <Route path='/explore' component={App}>
            <IndexRoute component={Explore} />
        </Route>
        <Route path='/discussions' component={App}>
            <IndexRoute component={Discussions} />
        </Route>
        <Route path='/friends' component={App}>
            <IndexRoute component={Friends} />
        </Route>
        <Route path='/classes' component={App}>
            <IndexRoute component={Classes} />
        </Route>
    </Router>
);
