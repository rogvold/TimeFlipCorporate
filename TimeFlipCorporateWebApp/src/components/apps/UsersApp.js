/**
 * Created by sabir on 20.01.17.
 */


import React, {PropTypes} from 'react';

import CorporateTemplate from '../timeflip/template/CorporateTemplate'
import UsersPanel from '../timeflip/users/panels/UsersPanel'



class UsersApp extends React.Component {

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    //ES5 - componentWillMount
    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    componentWillReceiveProps(){

    }

    getContent = () => {
        return (
            <div className={'container'} >
                <UsersPanel />
            </div>
        )
    }

    render(){

        return (
            <CorporateTemplate active={'users'} content={this.getContent()} />
        )
    }

}

export default UsersApp