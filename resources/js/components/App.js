import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import UnderstandingBreakpoints from './MainGrid';
import FillingSpace from './FillingSpace'

class App extends Component {
   render () {
        return (
            <div>
                <h3 className="text-center">Basic Grid</h3> 
                <UnderstandingBreakpoints />

                <h3 className="text-center">Filling Space</h3> 
                <FillingSpace />

            </div>
                       
        );
   }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
