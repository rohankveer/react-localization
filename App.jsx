import React from 'react';
var T = require('i18n-react').default;

class App extends React.Component {

  render() {
      let language = this.props.location.query.lang;
      return (
         <div>
           <h1>{T.translate(language + ".greetings.hello", { who: "Rohan Veer"})}</h1>
            <T.p text={{ key: language + ".greetings.howdy.normal", who: "Rohan Veer" }} />
         </div>
      );
   }
}

export default App;