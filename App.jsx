import React from 'react';
var T = require('i18n-react').default;

class App extends React.Component {

  componentWillMount(){
        T.setTexts(require('./locale/texts-en.yml'));
    }

   render() {
      return (
         <div>
            <T.p text={{ key: "greetings.hello", who: "Rohan" }} />
         </div>
      );
   }
}

export default App;