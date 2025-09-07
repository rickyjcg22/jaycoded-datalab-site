import React from 'react';
import Announcement from './Components/Announcement/Announcement';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Work from './Components/Work/Work';

const App = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Home />
      <About />
      {/* <Work /> */}
    </div>
  );
};

export default App;