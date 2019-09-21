import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    This is  Hats Page
</div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
