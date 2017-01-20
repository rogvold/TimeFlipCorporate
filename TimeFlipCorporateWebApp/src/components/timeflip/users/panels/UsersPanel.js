/**
 * Created by sabir on 20.01.17.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Dialog from '../../../dialog/Dialog'

import UserPanel from './UserPanel'

class UsersPanel extends React.Component {

    static defaultProps = {}

    static propTypes = {}

    state = {}

    //ES5 - componentWillMount
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    onUserClick = (u) => {
        console.log('onUserClick: u = ', u);
        this.setState({
            selectedUserId: u.id
        });
    }

    render = () => {
        let {users} = this.props;
        let {selectedUserId} = this.state;

        return (
            <div className={'users_panel'} >

                <div className={'users_list'} >
                    {users.map((u, k) => {
                        let key = 'user_' + k;
                        let onClick = () => {this.onUserClick(u)}
                        return (
                            <div key={key} className={'user_item'} onClick={onClick} >
                                <div className={'top_placeholder'} >
                                    <div className={'avatar_placeholder'} >
                                        <img className={'avatar'} src={u.avatar} />
                                    </div>
                                </div>
                                <div className={'medium_placeholder'} >
                                    <div className={'name_placeholder'} >
                                        <div className={'name'} >
                                            {u.firstName} {u.lastName}
                                        </div>
                                    </div>
                                </div>
                                <div className={'bottom_placeholder'} >
                                    <div className={'info_links_placeholder'} >
                                        <div className={'info_item'} >
                                            <div className={'icon_placeholder'} >
                                                <i className={'icon wait'} ></i>
                                            </div>
                                            <div className={'info_placeholder'} >
                                                <div className={'top'} >
                                                    Время
                                                </div>
                                                <div className={'bottom'} >
                                                    {1 + Math.floor(Math.random() * 10)}ч {' '}
                                                    {Math.floor(60 * Math.random())} мин
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {selectedUserId == undefined ? null :
                    <Dialog onClose={() => {this.setState({selectedUserId: undefined})}} >
                        <UserPanel id={selectedUserId} />
                    </Dialog>
                }

            </div>
        )
    }

}

let getUsers = (state) => {
    let map = state.users.usersMap;
    let {currentUser} = state.users;
    let arr = [];
    for (let key in map){
        if (currentUser != undefined && key == currentUser.id){
            continue;
        }
        arr.push(map[key]);
    }
    return arr;
}

const mapStateToProps = (state) => {
   return {
       users: getUsers(state)
   }
}

const mapDispatchToProps = (dispatch) => {
   return {

   }
}

UsersPanel = connect(mapStateToProps, mapDispatchToProps)(UsersPanel)

export default UsersPanel