/**
 * Created by sabir on 28.11.16.
 */

import React, {PropTypes} from 'react';

import CheckboxesPanel from '../checkboxes/CheckboxesPanel.js'

import CorporateTemplate from '../timeflip/template/CorporateTemplate'

 class DevApp extends React.Component {

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
             <CorporateTemplate  />
         )
     }

 }

 export default DevApp