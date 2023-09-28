import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BrandImg from '../assets/lady-on-phone-2.jpg';
import Button from '@mui/material/Button';

function TopBar({ onSignupButtonClick, onLoginButtonClick }) {
  return (
    <Paper elevation={3} style={{ padding: '0', position: 'relative' }}>
      <Card>
        <CardMedia
          component="img"
          alt="Your Brand Logo"
          height="600"
          image={BrandImg}
        />
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <Typography variant="h4" style={{ color: '#fff', marginRight: "20px" }}>
            chatYou
          </Typography>
          <Button onClick={onSignupButtonClick} variant='contained' color='primary' style={{marginRight:"10px"}}>Sign up</Button>
          <Button onClick={onLoginButtonClick} variant='contained' color='secondary'>Sign in</Button>


        </div>
      </Card>
    </Paper>
  );
}

export default TopBar;
