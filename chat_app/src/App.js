import './App.css';
import {ChatEngine} from 'react-chat-engine';
import { Fragment } from 'react';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <Fragment>

    <ChatEngine
      height="100vh"
      projectID="b300964b-1479-4193-9fe2-cf97aedf361e" //api key may not work after free trial ends
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/> }
      />
    
    </Fragment>
  );


}

export default App;
