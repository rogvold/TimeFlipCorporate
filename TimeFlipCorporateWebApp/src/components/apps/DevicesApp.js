/**
 * Created by sabir on 20.01.17.
 */

import React, {PropTypes} from 'react';

import CorporateTemplate from '../timeflip/template/CorporateTemplate'

class DevicesApp extends React.Component {

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

    render(){

        return (
            <CorporateTemplate active={'devices'}  />
        )
    }

}

export default DevicesApp