import React from 'react'
import style from './index.css'
import socket from './socket.io'


export default React.createClass({
  render() {
    return <div>
      <div>talk with socket.io</div>
        <ul id="messages"></ul>
         <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>
    </div>
  }
})

