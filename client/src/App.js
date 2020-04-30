import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Main />
      <Footer />
    </div>
  );
};

export default App;
