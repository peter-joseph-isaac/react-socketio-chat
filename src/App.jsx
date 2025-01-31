import { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import './App.css';

function App() {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');

  const messageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/post', {
        name: userName,
        message: message, 
      });
      console.log('sent successful');
      setMessage('');
    } catch (error) {
      console.error('Error making the POST request', error);
    }
  };

  useEffect(() => {
    const socket = io('http://localhost:3001');
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const userName = prompt('Please Enter Your Display Name!');

    if (userName !== null) {
      setUserName(userName);
    }
  }, []);


  return (
    <>
      <div id="chat">
        <div id="message-holder">
          {messages.map((message) => <ul>{message.data.text}</ul>)}
        </div>
        <div id="input-holder">
          <div id="name">{userName}</div>
          <input type="text" id="send-message" value={message} onChange={messageChange} placeholder="Type your message here..."></input>
          <button id="send-button" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  )
}

export default App