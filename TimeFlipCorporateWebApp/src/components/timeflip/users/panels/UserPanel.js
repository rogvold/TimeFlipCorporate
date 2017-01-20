/**
 * Created by sabir on 20.01.17.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UserPanel extends React.Component {

    static defaultProps = {}

    static propTypes = {
        id: PropTypes.string.isRequired,
        getUser: PropTypes.func
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

    getUser = () => {
        let {id, getUser} = this.props;
        let user = getUser(id);
        return user;
    }

    render = () => {
        let user = this.getUser();
        if (user == undefined){
            return null;
        }

        return (
            <div className={'user_panel'} >

                <div className={'top'}  >

                    <div className={'avatar_placeholder'} >
                        <img className={'avatar'} src={user.avatar} />
                    </div>

                    <div className={'name_placeholder'} >
                        <div className={'name'} >
                            {user.firstName} {user.lastName}
                        </div>
                    </div>

                </div>

                <div className={'bottom'} >

                </div>

            </div>
        )
    }

}

let getUser = (state, userId) => {
    let usersMap = state.users.usersMap;
    if (usersMap == undefined || userId == undefined){
        return undefined;
    }
    return usersMap[userId];
}

const mapStateToProps = (state) => {
   return {
       getUser: (userId) => {
           return getUser(state, userId);
       }
   }
}

const mapDispatchToProps = (dispatch) => {
   return {

   }
}

UserPanel = connect(mapStateToProps, mapDispatchToProps)(UserPanel)

export default UserPanel