// modules/About.js
import React from 'react'
import NavLink from '../component/NavLink'
import './learn.css'

export default React.createClass({
  render() {
    return (
    <div>
        <h2> Learn html5/css3 </h2>
        <ul>
          <li><NavLink to="/learn/lesson1">layout</NavLink></li>
          <li><NavLink to="/learn/lesson2">table 2</NavLink></li>
        </ul>
        {this.props.children}
    </div>)
  }
})