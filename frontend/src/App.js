

  import { Route } from 'react-router-dom';
import './App.css';
import ChatPage from './pages/chatPage';
import HomePage from './pages/HomePage';
// import { Button, ButtonGroup } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Route path="/"component={HomePage}exact/>
      <Route path="/chats"component={ChatPage}/>

    </div>
  );
}

export default App;
