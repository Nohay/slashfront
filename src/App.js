/* eslint-disable no-console */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Process from './components/pages/Process'
import Services from './components/pages/Services'
import Freelancers from './components/pages/Freelancers'
import Portfolio from './components/pages/Portfolio'
import Page from './components/pages/Page'
import Contact from './components/pages/Contact'

export default function App() {
  return (
    <div className="parent">
      <Switch>
        <>
          <Route exact path="/process">
            <Process />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/freelancers">
            <Freelancers />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/page">
            <Page />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </>
      </Switch>
    </div>
  )
}
