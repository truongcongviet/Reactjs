import React from 'react';
import ContentForm from './content-react-form';

class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
     };
     updateState(e) {
        this.setState({data: e.target.value});
     }
     render() {
        return (
           <div>
              <ContentForm myDataProp = {this.state.data} 
                 updateStateProp = {this.updateState}></ContentForm>
           </div>
        );
     }
 }
//  class Content extends React.Component {
//     render() {
//        return (
//           <div>
//              <input type = "text" value = {this.props.myDataProp} 
//                 onChange = {this.props.updateStateProp} />
//              <h3>{this.props.myDataProp}</h3>
//           </div>
//        );
//     }
//  }
 
 export default ReactForm;