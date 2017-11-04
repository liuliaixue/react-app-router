import React from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:8080');

socket.on('chat message', msg => {
   console.log('@@@@@@@', msg)
});
socket.on('connect', function(){
  console.log('xxxxxxx')
});
socket.on('event', function(data){
  console.log('xxxxxxx')
});
socket.on('disconnect', function(){
  
});

socket.emit('chat message', 'value'); 
socket.emit('connect','@@@@@@@ con')


class Talk extends React.Component{
  handleClick() {

  };
  
  render() {
    return <div>
      <h2>Talk room page</h2>
      <ul id="messages"></ul>
      <form action="">
        <input id="m" autoComplete="off" /><button>Send</button>
      </form>

    </div>
  }
}

export default Talk;
