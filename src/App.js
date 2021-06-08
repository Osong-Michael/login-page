import React from 'react'
import Aside from './components/Aside'
import SignUp from './components/Signup'

function App() {
  return (
    <div className="App">
      <div className="login">
        <SignUp />
      </div>
      <div className="aside">
        <Aside />
      </div>
    </div>
  );
}

export default App;
