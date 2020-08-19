import React from 'react';
import './App.css';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Photo from './contents/Photo';
import Video from './contents/Video';

function App() {
  return (
  <Router>
  <div className="App">
  <Navbar />
  <Route exact path="/">
  <Home />
  </Route>
  <Route path="/photo">
  <Photo />
  </Route>
  <Route path="/video">
  <Video />
  </Route>
  </div>
  </Router>
  )
  }

export default App;
