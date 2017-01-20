/**
 * Created by sabir on 01.12.16.
 */

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Router, Route, browserHistory, useRouterHistory, hashHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

//apps
import UserIndexApp from './UserIndexApp.js';
import DevApp from './DevApp.js';
import LoginApp from './LoginApp.js';
import APIPlaygroundApp from './APIPlaygroundApp.js';
import EmulatorApp from './EmulatorApp.js';
import UsersApp from './UsersApp.js';
import DevicesApp from './DevicesApp.js';

class App extends React.Component {

    static defaultProps = {}

    static propTypes = {
        currentUser: PropTypes.object,
        initialized: PropTypes.bool
    }

    state = {}

    //ES5 - componentWillMount
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    getUserRoute() {

        console.log('getUserRoute occured');

        return (
            <Router history={hashHistory} >

                <Route useAutoKeys={false} path="/" component={UserIndexApp} >
                    <IndexRoute component={UserIndexApp} />
                </Route>

                <Route path="/dev" component={DevApp}/>

                <Route path="/api" component={APIPlaygroundApp}/>

                <Route path="/emulator" component={EmulatorApp}/>

                <Route path="/devices" component={DevicesApp}/>

                <Route path="/users" component={UsersApp}/>

            </Router>
        );
    }

    getGuestRote() {
        return (
            <Router history={hashHistory} >

                <Route useAutoKeys={false} path="/" component={UserIndexApp} >
                    <IndexRoute component={UserIndexApp} />
                </Route>

                <Route path="/dev" component={DevApp}/>

                <Route path="/api" component={APIPlaygroundApp}/>

                <Route path="/emulator" component={EmulatorApp}/>

                <Route path="/devices" component={DevicesApp}/>

                <Route path="/users" component={UsersApp}/>

                <Route path="/login" component={LoginApp}/>

            </Router>
        );
    }


    render() {

        if (this.props.initialized == false){
            return (
                <div className={'initializing_placeholder'} >
                    loading...
                </div>
            );
        }

        var user = this.props.currentUser;
        if (user == undefined){
            return (
                this.getGuestRote()
            );
        }

        return this.getUserRoute();
    }

}

const mapStateToProps = (state) => {
    return {
        currentUser: state.users.currentUser,
        initialized: state.users.initialized
    }
}

App = connect(mapStateToProps, null)(App)

export default App