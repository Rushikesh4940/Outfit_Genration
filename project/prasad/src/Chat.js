import logo from './logo.svg';
import './Chat.css';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

function Chat() {

  const steps = [
    {
      id: "Greet",        
      message: "Hello, Welcome to our shop",        
      trigger: "Done",        
    },        
    {       
      id: "Done",        
      message: "Please enter your name!",        
      trigger: "waiting1",        
    },      
    {      
      id: "waiting1",      
      user: true,      
      trigger: "Name",      
    },      
    {       
      id: "Name",     
      message: "Hi {previousValue}, Please select your issue",     
      trigger: "issues",     
    },      
    {      
      id: "issues",   
      options: [   
        {    
          value: "Male",   
          label: "Male",        
          trigger: "Male",       
        },       
        { value: "Male", label: "FeMale", trigger: "Male" },       
      ],       
    },       
    {       
      id: "Male",       
      message:        
        "Thanks for value information providing",        
      end: true,       
    },       
    {       
      id: "Female",       
      message:       
        "Thanks for value information providing",       
      end: true,       
    },       
  ];

  return (
    <>
      <ChatBot steps={steps} className="chat" />
    </>
  );
}

export default Chat;
