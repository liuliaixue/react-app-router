import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App   from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo  from './modules/Repo'
import Home  from './modules/Home'
import Game  from './modules/Game'
import Talk from './modules/Talk'

// render(<App/>, document.getElementById('app'))
render((
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={Home}/>
      
      <Route path='/game' component={Game} />
      <Route path='/about' component={About} />
      <Route path='/repos' component={Repos} >
        <Route path='/repos/:userName/:repoName' component={Repo} />
      </Route>
      <Route path='talk' component={Talk}> </Route>
    </Route>
  </Router>
), document.getElementById('app'))
