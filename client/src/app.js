import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/main.scss'
import { HomePage, VehiclesListingPage, VehiclePage } from '@pages'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/vehicles' component={VehiclesListingPage} />
      <Route exact path='/vehicles/:vehicleId' component={VehiclePage} />
    </Switch>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))
