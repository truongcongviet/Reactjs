import React from 'react';
import ContentKey from './content-key';


class ReactKey extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data:[
            {
               component: 'First...',
               id: 1
            },
            {
               component: 'Second...',
               id: 2
            },
            {
               component: 'Third...',
               id: 3
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <div>
               {this.state.data.map((dynamicComponent, i) => <ContentKey
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
   }
}
 export default ReactKey;