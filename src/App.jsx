import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import './App.css';

function App() {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const messageRef = useRef(null);

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


  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: 'smooth'});
  }, [messages]);


  const renderTextWithImages = (message, messageId) => {
    const regex = /(https?:\/\/[^\s]+(?:\.jpg|\.jpeg|\.png|\.gif))/g;  
    const parts = message.split(regex); 

    return parts.map((part, index) => {
      if (part.match(/https?:\/\/[^\s]+(?:\.jpg|\.jpeg|\.png|\.gif)/)) {
        return <img key={`${messageId}-${index}`} src={part} alt="comment image" style={{ maxWidth: '100%' }} />;
      }
      return <span key={`${messageId}-${index}`}>{part}</span>;
    });
  };
  
  return (
    <>
      <div id="chat">
      <h1>Live Chat!</h1>
        <div id="message-holder">
          {messages.map((message) => <ul key={message.id}>{message.name} : {renderTextWithImages(message.message, message.id)}</ul>)}
          <div ref={messageRef} />
        </div>
        <div id="input-holder">
          <div id="name">Welcome! {userName}</div>
          <input type="text" id="send-message" value={message} onChange={messageChange} placeholder="Type your message here..."></input>
          <button id="send-button" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  )
}

export default App