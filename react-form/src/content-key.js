import React from 'react';

class ContentKey extends React.Component {
    render() {
       return (
          <div>
             <div>{this.props.componentData.component}</div>
             <div>{this.props.componentData.id}</div>
          </div>
       );
    }
  }

 export default ContentKey;
