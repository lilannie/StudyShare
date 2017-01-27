import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Main from 'Main';
import Index from 'Index';
import Subject from 'Subject';
import Notebook from 'Notebook';
import Notecard from 'Notecard';
import Deck from 'Deck';
import Animation from 'Animation';
import Browse from 'Browse';
import Group from 'Group';
import Friend from 'Friend';
import Login from 'Login';
import Signup from 'Signup';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Index}/>
        </Route>
        <Route path="/subjects" component={Main}>
            <IndexRoute component={Subject}/>
        </Route>
        <Route path="/notebooks" component={Main}>
            <IndexRoute component={Notebook}/>
        </Route>
        <Route path="/notecards" component={Main}>
            <IndexRoute component={Deck}/>
        </Route>
        <Route path="/notecard" component={Main}>
            <IndexRoute component={Notecard} />
        </Route>
        <Route path="/animations" component={Main}>
            <IndexRoute component={Animation}/>
        </Route>
        <Route path="/explore" component={Main}>
            <IndexRoute component={Browse}/>
        </Route>
        <Route path="/groups" component={Main}>
            <IndexRoute component={Group}/>
        </Route>
        <Route path="/friends" component={Main}>$
            <IndexRoute component={Friend}/>
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
    </Router>,
    document.getElementById('app')
);


