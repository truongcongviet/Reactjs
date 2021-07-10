import React from 'react';

class ReactEvent extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({data: 'Data updated...'})
   }
   render() {
      return (
         <div>
            <button onClick = {this.updateState}>CLICK</button>
            <h1>Hello world</h1>
            <h1>Hello world 222</h1>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default ReactEvent;