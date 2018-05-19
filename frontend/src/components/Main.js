import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// getting the components

import EarthHome from './EarthHome'

export default class Main extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={EarthHome}/>
                </Switch>
            </div>
        )
    }

}