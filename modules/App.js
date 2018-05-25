import React from 'react'
import { Link } from 'react-router'
import NavLink from '../component/NavLink'
import Home from './Home'
import logo from './logo.svg'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>

          <li><NavLink to="/game" >Game</NavLink></li>

          <li><NavLink to="/gameTitle" >Game title</NavLink></li>

          <li><NavLink to="/mention" >mention</NavLink></li>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/repos" >Repos</NavLink></li>

          <li><NavLink to="/learn" >learn</NavLink></li>
        </ul>
        {this.props.children || <Home />}
      </div>
    )
  }
})
