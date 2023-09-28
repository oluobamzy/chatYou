import React, { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChatContainer = styled(Paper)(({ theme }) => ({
  maxWidth: '400px',
  margin: '0 auto',
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

const ChatMessage = styled('div')(({ theme, isSent }) => ({
  background: isSent ? '#e1f5fe' : '#f0f0f0',
  padding: '8px',
  borderRadius: '8px',
  marginBottom: '10px',
  alignSelf: isSent ? 'flex-end' : 'flex-start',
}));

const InputContainer = styled('div')({
  display: 'flex',
  gap: '10px',
  marginTop: '20px',
});

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage, user: 'You', isSent: true }]);
      setNewMessage('');
    }
  };

  // Simulate receiving a message (for demonstration purposes)
  // setTimeout(() => {
  //   setMessages([...messages, { text: 'Hello there!', user: 'Friend', isSent: false }]);
  // }, 3000);

  return (
    <ChatContainer elevation={3}>
      <Typography variant="h5" align="center">
        Chat App
      </Typography>
      <div>
        {messages.map((message, index) => (
          <ChatMessage key={index} isSent={message.isSent}>
            <strong>{message.user}:</strong> {message.text}
          </ChatMessage>
        ))}
      </div>
      <InputContainer>
        <TextField
          label="Message"
          variant="outlined"
          value={newMessage}
          onChange={handleMessageChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </InputContainer>
    </ChatContainer>
  );
}

export default ChatApp;
