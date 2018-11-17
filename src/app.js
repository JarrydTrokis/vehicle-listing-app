import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/main.scss'
import { HomePage, VehiclesListingPage } from '@pages'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/vehicles' component={VehiclesListingPage} />
    </Switch>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))
