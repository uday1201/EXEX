import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Main from './components/Main'

// TODO: add routers
class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        )
    }

}

export default App;
