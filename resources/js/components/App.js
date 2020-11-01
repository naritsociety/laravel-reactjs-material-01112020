import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import UnderstandingBreakpoints from './MainGrid';

class App extends Component {
   render () {
        return (
            <div>
                <h3 className="text-center">Hello React</h3> 
                <UnderstandingBreakpoints />
            </div>
                       
        );
   }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
