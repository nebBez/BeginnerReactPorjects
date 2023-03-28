import './App.css';
import {ChatEngine} from 'react-chat-engine';
import { Fragment } from 'react';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <Fragment>

    <ChatEngine
      height="100vh"
      projectID="b300964b-1479-4193-9fe2-cf97aedf361e" //api key may not work after free trial ends
      userName="Nbby"
      userSecret="12345678"
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/> }
      />
    
    </Fragment>
  );


}

export default App;
