import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import Game from './modules/Game/game'

import Mention from './modules/Mention'



import GameTitle from './modules/Game/route-title'

// render(<App/>, document.getElementById('app'))
render((
  <Router history={browserHistory}>
    <Route path="/"  >
      <IndexRoute component={App} />

      <Route path="/game" component={Game} />
      <Route path="/gameTitle" component={GameTitle} />
      <Route path="/mention" component={Mention} />
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos} >
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
