/**
 * Created by sabir on 19.01.17.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import LeftSidebar from './LeftSidebar'

import * as constants from '../../../constants/AccountsConstants'

class CorporateTemplate extends React.Component {

    static defaultProps = {
        active: 'home'
    }

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

    render = () => {
        let {active} = this.props;

        return (
            <div className={'corporate_template'} >

                <div className={'left_sidebar'} >
                    <div className={'logo_placeholder'}  >
                        <img src={constants.LOGO_URL} className={'logo'} />
                    </div>
                    <div className={'sidebar_placeholder'} >
                        <LeftSidebar active={active} />
                    </div>
                </div>

                <div className={'main_area'} >

                    <div className={'header'} >
                        <div className={'container'} >
                            <div className="ui left icon input fluid search_input_placeholder">
                                <input type="text" placeholder="Поиск..." />
                                <i className="search icon"></i>
                            </div>
                        </div>
                        <div className={'top_right_placeholder'} >

                        </div>
                    </div>

                    <div className={'content'} >
                        {this.props.content}
                    </div>

                </div>

            </div>
        )
    }

}


//const mapStateToProps = (state) => {
//    return {
//        currentUserId: state.users.currentUserId,
//        loading: state.users.loading
//    }
//}

//const mapDispatchToProps = (dispatch) => {
//    return {
//        onLogout: (data) => {
//            dispatch(actions.logOut())
//        }
//    }
//}

//CorporateTemplate = connect(mapStateToProps, mapDispatchToProps)(CorporateTemplate)

export default CorporateTemplate