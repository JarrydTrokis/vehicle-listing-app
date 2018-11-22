import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/main.scss'

import VehicleProvider from './providers/VehicleProvider'
import { HomePage, VehiclesListingPage, VehiclePage } from '@pages'

const App = () => (
  <VehicleProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/vehicles' component={VehiclesListingPage} />
        <Route exact path='/vehicles/:vehicleId' component={VehiclePage} />
      </Switch>
    </BrowserRouter>
  </VehicleProvider>
)

render(<App />, document.getElementById('app'))
